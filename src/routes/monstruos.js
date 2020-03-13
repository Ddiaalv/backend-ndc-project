const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();

router.get('/listaMonstruos', (req, res, next) => {
  mysqlConnection.query(
    'SELECT id_monstruo, orden_menu, nombre, ruta, tipo, especie, vsfuego, vsagua, vsrayo, vshielo, vsdraco FROM monstruo ORDER BY orden_menu',
    (error, rows) => {
      if (!error) {
        res.json(rows);
      } else {
        console.log(error);
      }
    }
  );
});

module.exports = router;
