const User = require('../models/userModel');

module.exports = {
  // Signup
  signup(req, res) {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      token: 'token',
    });
    user.save((err, doc) => {
      if (err) res.status(400).send(err);
      res.status(200).send(doc);
    });
  },

  // Login
  login(req, res) {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (!user) return res.json({ message: 'User not found' });
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) throw err;
        if (!isMatch)
          return res.status(400).json({
            message: 'Wrong password',
          });
        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
          res
            .cookie('auth', user.token)
            .json({ message: 'Successfully logged in' });
        });
      });
    });
  },

  // Logout
  logout(req, res) {
    req.user.deleteToken(req.token, (err, user) => {
      if (err) return res.status(400).json(err);
      res.status(200).json({ message: 'User is logged out' });
    });
  },
};
