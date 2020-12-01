const express = require('express');
const router = express.Router();

const pdfCreator = require('../controllers/pdfCreator');

router.post('/', pdfCreator.generatePDF, (req, res) => {
  res.status(200).json({ msg: 'OKAY from server' });
});

module.exports = router;
