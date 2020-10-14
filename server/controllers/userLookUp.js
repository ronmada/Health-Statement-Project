const Employee = require('../models/employee');
const Student = require('../models/student');

const studentLookUp = async (id) => {
  return await Student.find({ 'student.id': id }, '-_id -__v').exec();
};

const employeeLookUp = async (id) => {
  return await Employee.find({ 'employee.id': id }, '-_id -__v').exec();
};

exports.userLookUp = async (req, res, next) => {
  const id = req.query.id;
  if (isNaN(id)) {
    res
      .status(404)
      .json({ message: `no id specified or id is NaN. id is-> ${id}` });
    return next();
  }
  try {
    let resultArray = await studentLookUp(id);
    if (resultArray.length !== 0) {
      res.data = resultArray;
      return next();
    }
    resultArray = await employeeLookUp(id);
    if (resultArray.length !== 0) {
      res.data = resultArray;
      return next();
    }
    return res.status(404).json({ message: 'Not found user with this ID' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
