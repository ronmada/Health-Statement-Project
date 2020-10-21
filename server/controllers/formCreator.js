const Healthstate = require('../models/Healthstate');

exports.generateForm = async (req, res, next) => {
  console.log(req.body);
  const bodyreq = req.body;
  const currentDate = new Date();
  const readyDate = `${currentDate.getFullYear()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}`;
  console.log(readyDate);
  bodyreq.formDate = readyDate;
  const doc = new Healthstate(bodyreq);
  doc.save((err) => {
    if (err) return console.log(err);
    console.log('saved OKAY');
  });
  next();
};
