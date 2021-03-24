const express = require('express');
const router = express.Router();
const protected = require('../middleware/protect_middleware');

const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.get('/profile', protected, authController.getUserProfile);
router.put('/profile', protected, authController.updateUserProfile);

module.exports = router;
