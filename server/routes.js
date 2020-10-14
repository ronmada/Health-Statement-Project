const app = require('./app');
const formRouter = require('./routes/formCreator');
const userRouter = require('./routes/userLookUp');

const getRoutes = () => {
  app.app.use('/formCreator', formRouter);
  app.app.use('/userLookUp', userRouter);
  console.log('Routes init successfully');
};

module.exports = getRoutes;
