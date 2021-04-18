const express = require('express');
const path = require('path');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, 'images');
    cb(null, 'client/public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post('/', upload.single('image'), (req, res, next) => {
  try {
    console.log(req.file);
    return res.status(201).json({
      message: 'File uploded successfully',
      data: req.file,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
