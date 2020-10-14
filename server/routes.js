const app = require('./app');

const getRoutes = () => {
  const formRouter = require('./routes/formCreator');
  //   const locationsRouter = require('./routes/locations')
  app.app.use('/formCreator', formRouter);
  //   app.app.use('/locations', locationsRouter)
  console.log('Routes init successfully');
};

module.exports = getRoutes;
