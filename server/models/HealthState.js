const mongoose = require('mongoose');

const healthStateSchema = new mongoose.Schema({
  formType: String,
  name: String,
  id: String,
  institute: {
    id: String,
    name: String,
  },
  formDate: Date,
  signature: String,
  phoneNum: String,
  guardian: {
    id: String,
    firstName: String,
    lastName: String,
    gender: String,
  },
});

module.exports = mongoose.model('HealthState', healthStateSchema);
