const express = require('express');
const mysqlConnection = require('../database');
const router = express.Router();

router.get('/listaMonstruos', (req, res, next) => {
  mysqlConnection.query(
    'SELECT id_monstruo, orden_menu, nombre, ruta, tipo, especie, fuego, agua, rayo, hielo, draco FROM monstruo ORDER BY orden_menu',
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
    `SELECT id_monstruo, orden_menu, nombre, ruta, especie, tipo, rango, caracteristicas, notas, tamano_min, tamano_max, fuego, agua, rayo, hielo, draco, veneno, sueno, paralisis, nitro, aturdimiento, elemento01, elemento02, resistencia01, resistencia02, resistencia03, estado01, estado02, estado03  FROM monstruo WHERE ruta = '${req.params.id}'`,
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

router.get('/monstruo/puntodebil/:id', (req, res, next) => {
  mysqlConnection.query(
    `SELECT MPD.corte, MPD.contundente, MPD.disparo, MPD.zona FROM monstruo_puntodebil AS MPD WHERE id_monstruo = '${req.params.id}'`,
    (error, rows) => {
      if (!error) {
        res.json(rows);
      } else {
        console.log(error);
      }
    }
  );
});

router.get('/monstruo/materiales/:idMonstruo/:idRango/:idCorte', (req, res, next) => {
  mysqlConnection.query(
    `SELECT MM.id_monstruo, MM.cortados, MM.rango, MM.frecuencia, M.nombre, M.icon FROM monstruo_material AS MM INNER JOIN material AS M ON M.id = MM.id_material WHERE MM.id_monstruo = '${req.params.idMonstruo}' AND MM.rango = '${req.params.idRango}' AND MM.cortados = '${req.params.idCorte}'`,
    (error, rows) => {
      if (!error) {
        console.log(res);
        res.json(rows);
      } else {
        console.log(error);
      }
    }
  );
});

router.get('/monstruo/materiales/zona/:idMonstruo/:idRango', (req, res, next) => {
  mysqlConnection.query(
    `SELECT MRM.zona, MRM.rango, M.nombre, M.icon FROM monstruo_rangomaterial AS MRM INNER JOIN material AS M ON MRM.id_material01 = M.id WHERE MRM.id_monstruo = ${req.params.idMonstruo} AND MRM.rango = '${req.params.idRango}' ORDER BY MRM.rango DESC`,
    (error, rows) => {
      if (!error) {
        console.log(res);
        res.json(rows);
      } else {
        console.log(error);
      }
    }
  );
});

module.exports = router;
