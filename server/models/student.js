const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student: {
    id: String,
    firstName: String,
    lastName: String,
    gender: String,
    institute: String,
  },
  guardian: {
    firstName: String,
    lastName: String,
    gender: String,
    id: String,
  },
  institute: {
    InstituteName: String,
    InstituteId: Number,
  },
});

module.exports = mongoose.model('Student', studentSchema);
