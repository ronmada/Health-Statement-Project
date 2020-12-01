const app = require('./app');
const formRouter = require('./routes/formCreator');
const userRouter = require('./routes/userLookUp');
const pdfRouter = require('./routes/pdfCreator');
const getRoutes = () => {
  app.app.use('/formCreator', formRouter);
  app.app.use('/userLookUp', userRouter);
  app.app.use('/pdfCreator', pdfRouter);
  console.log('Routes init successfully');
};

module.exports = getRoutes;
