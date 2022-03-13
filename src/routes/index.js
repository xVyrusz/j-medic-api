const doctorsRouter = require('./doctors.router');
const patientsRouter = require('./patients.router');

function routerApi(app) {
  app.use('/doctors', doctorsRouter);
  app.use('/patients', patientsRouter);
}

module.exports = routerApi;
