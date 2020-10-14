const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employee: {
    id: String,
    firstName: String,
    lastName: String,
    gender: String,
    phoneNum: String,
  },
  institutes: [
    {
      instituteName: String,
      instituteId: Number,
    },
  ],
});

module.exports = mongoose.model('Employee', employeeSchema);
