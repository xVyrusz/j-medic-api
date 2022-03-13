const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.redirect('/home')
});

app.get('/home', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: 1000
  });
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
