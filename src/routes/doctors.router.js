const express = require('express');
const faker = require('@faker-js/faker');

const router = express.Router();

// Routes estáticos
router.get('/', (req, res) => {
  const doctors = [];
  const {
    size
  } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    doctors.push({
      nombre: faker.default.name.firstName(),
      apellidoP: faker.default.name.lastName(),
      apellidoM: faker.default.name.lastName(),
      cedula: faker.default.datatype.number({
        min: 10000000,
        max: 99999999
      }).toString(),
      tel: faker.default.phone.phoneNumber('33#######')
    })
  }

  res.json(doctors);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});


// Routes dinámicos
router.get('/:id', (req, res) => {
  const {
    id
  } = req.params;
  res.json({
    id,
    name: 'Doctor',
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  });
});

module.exports = router;
