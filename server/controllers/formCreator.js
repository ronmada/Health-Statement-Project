const Healthstate = require('../models/health_state');

exports.generateForm = async (req, res, next) => {
  console.log(req.body);
  const bodyreq = req.body;
  const t = new Date();
  const readyDate = `${t.getFullYear()}/${t.getMonth() + 1}/${t.getDate()}`;

  console.log(readyDate);
  // bodyreq.formDate = readyDate;
  const doc = new Healthstate(bodyreq);
  doc.save((err) => {
    if (err) return console.log(err);
    console.log('saved OKAY');
  });

  next();
};
