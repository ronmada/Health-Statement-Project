const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  userType: String,
  id: String,
  firstName: String,
  lastName: String,
  gender: String,
  phoneNum: String,
  institute: [
    {
      id: Number,
      name: String,
    },
  ],
});

module.exports = mongoose.model('Employee', employeeSchema);
