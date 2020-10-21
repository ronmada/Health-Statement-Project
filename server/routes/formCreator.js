const express = require('express');
const router = express.Router();
const formCreator = require('../controllers/formCreator');

router.post('/', formCreator.generateForm, (req, res) => {
  res.status(200).json({ msg: 'OKAY from server' });
});

module.exports = router;
