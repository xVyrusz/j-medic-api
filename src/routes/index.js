const express = require('express');
const doctorsRouter = require('./doctors.router');
const patientsRouter = require('./patients.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/doctors', doctorsRouter);
  router.use('/patients', patientsRouter);
}

module.exports = routerApi;
