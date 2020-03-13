const express = require('express');
const nodeca = express();

// SETTINGS
const PORT = process.env.PORT || 3010;
//MIDDLEWARES - Se ejecuta antes de las rutas, por si queremos hacer alguna transformacion a la hora de obtener los datos.
nodeca.use(express.json());
// ROUTES
nodeca.use(require('./routes/monstruos'));
// EXEC SERVER
nodeca.listen(PORT, () => {
  console.log(`Server iniciado en el puerto: ${PORT}`);
});
