const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.redirect('/home')
});

app.get('/home', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/doctors', (req, res) => {
  res.json([{
    name: 'Producto 1',
    price: 1000
  }, {
    name: 'Producto 2',
    price: 2000
  }]);
});

app.get('/doctors/:id', (req, res) => {
  const {
    id
  } = req.params;
  res.json({
    id,
    name: 'Producto 2',
    price: 2000
  })
});

app.get('/patients/:patientsId', (req, res) => {
  const { patientsId } = req.params;
  res.json({
    patientsId
  })
})

app.listen(port, () => {
  console.log('Mi port' + port);
});
