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

exports.addItem = Async(async (req, res, next) => {
  try {
    const { title, description, details, image, price, inStock } = req.body;
    const item = await Item.create({
      user: req.user._id,
      title,
      description,
      details,
      image,
      price,
      inStock,
    });
    res.status(201).json({ message: 'Item created!', id: item._id });
  } catch (error) {
    console.log(error);
  }
});
