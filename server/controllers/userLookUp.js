const Employee = require('../models/employee');
const Student = require('../models/student');

const studentLookUp = async (id) => {
  return await Student.findOne({ id: id }, '-_id -__v').exec();
};

const employeeLookUp = async (id) => {
  return await Employee.findOne({ id: id }, '-_id -__v').exec();
};
const isEmpty = (obj) => {
  for (const x in obj) return false;
  return true;
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
    let resultObject = await studentLookUp(id);
    if (!isEmpty(resultObject)) {
      console.log('found student');
      res.data = resultObject;
      return next();
    }
    resultObject = await employeeLookUp(id);
    if (!isEmpty(resultObject)) {
      console.log('found employee');
      res.data = resultObject;
      return next();
    }
    console.log(`didn't find anything`);
    // return res
    //   .status(200)
    //   .json({ error: `Not found user with this ID: ${id}` });
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
