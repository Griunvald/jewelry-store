const User = require('../models/userModel');

const authenticate = (req, res, next) => {
  const token = req.cookies.auth;
  User.findByToken(token, (err, user) => {
    if (err) return res.status(400).json({ message: 'Bad token' });
    if (!user)
      return res.status(401).json({ message: 'User must be logged in' });
    req.user = user;
    req.token = token;
    next();
  });
};

module.exports = authenticate;
