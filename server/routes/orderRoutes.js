const express = require('express');
const router = express.Router();
const protected = require('../middleware/protect_middleware');

const orderController = require('../controllers/orderController');

router.post('/', protected, orderController.addOrderItems);
router.get('/:id', protected, orderController.getOrderByID);

module.exports = router;
