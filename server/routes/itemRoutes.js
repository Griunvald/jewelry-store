const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const protected = require('../middleware/protect_middleware');

router.get('/', itemController.getItems);

router.get('/:id', itemController.getItem);
router.post('/', protected, itemController.addItem);

module.exports = router;
