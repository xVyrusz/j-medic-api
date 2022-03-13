const express = require('express');
const routerApi = require('./src/routes');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.redirect('/home')
});

app.get('/home', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

// Router
routerApi(app);

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
