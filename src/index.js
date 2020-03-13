const express = require('express');
const nodeca = express();

// SETTINGS
const PORT = process.env.PORT || 3010;
//MIDDLEWARES - Se ejecuta antes de las rutas, por si queremos hacer alguna transformacion a la hora de obtener los datos.
nodeca.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'YOUR-DOMAIN.TLD'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
nodeca.use(express.json());
// ROUTES
nodeca.use(require('./routes/monstruos'));
// EXEC SERVER
nodeca.listen(PORT, () => {
  console.log(`Server iniciado en el puerto: ${PORT}`);
});
