const Async = require('express-async-handler');
const Item = require('../models/itemModel');

exports.getItems = Async(async (req, res) => {
  const items = await Item.find({});
  res.json(items);
});

exports.getItem = Async(async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});
