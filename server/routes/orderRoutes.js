const express = require('express');
const router = express.Router();
const protected = require('../middleware/protect_middleware');

const orderController = require('../controllers/orderController');

router.post('/', protected, orderController.addOrderItems);

module.exports = router;
