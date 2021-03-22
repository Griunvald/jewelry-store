const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: 1,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    token: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function (next) {
  var user = this;

  if (user.isModified('password')) {
    bcrypt.hash(user.password, 10, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  var user = this;
  bcrypt.compare(candidatePassword, user.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;
  const token = jwt.sign(user.id, process.env.TOKEN_SECRET);
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  var user = this;

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) return cb(err);
    user.findOne({ _id: decoded }, (err, user) => {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

userSchema.methods.deleteToken = function (token, cb) {
  var user = this;
  user.updateOne({ $unset: { token: 1 } }, (err, user) => {
    if (err) return cb(err);
    cb(null, user);
  });
};

const User = mongoose.model('user', userSchema);

module.exports = User;
