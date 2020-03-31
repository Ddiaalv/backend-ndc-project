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

router.get('/monstruo/:id', (req, res, next) => {
  mysqlConnection.query(
    `SELECT id_monstruo, orden_menu, nombre, ruta, especie, tipo, rango, caracteristicas, notas, tamano_min, tamano_max, fuego, agua, rayo, hielo, draco, vsveneno, vssueno, vsparalisis, vsnitro, vsaturdimiento, elemento01, elemento02, resistencia01, resistencia02, resistencia03, estado01, estado02, estado03  FROM monstruo WHERE ruta = '${req.params.id}'`,
    (error, rows) => {
      if (!error) {
        res.json(rows);
      } else {
        console.log(error);
      }
    }
  );
});

router.get('/monstruo/habitat/:id', (req, res, next) => {
  mysqlConnection.query(
    `SELECT h.habitat FROM monstruo AS m INNER JOIN monstruo_habitat AS mh ON m.id_monstruo = mh.id_monstruo INNER JOIN habitat AS h ON h.id_habitat = mh.id_habitat WHERE m.id_monstruo = '${req.params.id}'`,
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
