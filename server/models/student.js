const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  userType: String,
  id: String,
  firstName: String,
  lastName: String,
  gender: String,
  institute: {
    id: Number,
    name: String,
  },
  guardian: [
    {
      id: String,
      firstName: String,
      lastName: String,
      gender: String,
    },
  ],
});

module.exports = mongoose.model('Student', studentSchema);
