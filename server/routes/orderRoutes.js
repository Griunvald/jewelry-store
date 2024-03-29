const express = require('express');
const router = express.Router();
const protected = require('../middleware/protect_middleware');

const orderController = require('../controllers/orderController');

router.post('/', protected, orderController.addOrderItems);
router.get('/myorders', protected, orderController.getMyOrders);
router.get('/:id', protected, orderController.getOrderByID);
router.put('/:id/pay', protected, orderController.updateOrderToPaid);

module.exports = router;
