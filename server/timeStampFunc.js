module.exports = (req, res, next) => {
  const t = new Date();
  res.timeNow = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}\t${t.getFullYear()}-${
    t.getMonth() + 1
  }-${t.getDate()}`;
  console.log(`APP \nTime: ${res.timeNow}\nReq URL=${req.originalUrl}\n\n`);
  next();
};
