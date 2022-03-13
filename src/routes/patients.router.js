const express = require('express');
const faker = require('@faker-js/faker');

const router = express.Router();

// Routes estáticos
router.get('/', (req, res) => {
  const patients = [];
  const {
    size
  } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    patients.push({
      nombre: faker.default.name.firstName(),
      apellidoP: faker.default.name.lastName(),
      apellidoM: faker.default.name.lastName(),
      edad: faker.default.datatype.number({
        min: 1,
        max: 99
      }).toString(),
      tel: faker.default.phone.phoneNumber('33#######')
    })
  }

  res.json(patients);
});

// Routes dinámicos
router.get('/:id', (req, res) => {
  const {
    id
  } = req.params;
  res.json({
    id,
    name: 'Producto 2',
    price: 2000
  })
});

module.exports = router;
