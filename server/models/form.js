const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  formType: String,
  name: String,
  id: String,
  institute: String,
  phoneNum: String,
  guardianId: String,
  guardianName: String,
  formDate: Date,
  formSignature: Boolean,
});

module.exports = mongoose.model('Form', formSchema);
