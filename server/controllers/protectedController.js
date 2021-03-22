const User = require('../models/userModel');

module.exports = {
  protected(req, res) {
    if (req.user.token == null) return res.json('User must be logged in');
    res.json('Welcome to protected route!');
  },
};
