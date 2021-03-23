const express = require('express');
const router = express.Router();
const protected = require('../middleware/protect_middleware');

const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
// router.get('/logout', authController.logout);

router.get('/profile', protected, authController.getUserProfile);

module.exports = router;
