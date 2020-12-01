const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.set('useCreateIndex', true)

const healthStateSchema = new mongoose.Schema({
  formType: String,
  name: String,
  id: String,
  institute: {
    id: String,
    name: String,
  },
  formDate: String,
  signature: String,
  phoneNum: String,
  guardian: {
    id: String,
    firstName: String,
    lastName: String,
    gender: String,
  },
});
healthStateSchema.plugin(AutoIncrement, { inc_field: 'formId' });
module.exports = mongoose.model('HealthState', healthStateSchema);
