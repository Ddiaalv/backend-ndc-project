"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonsterMaterialByZone = exports.getMonsterMaterials = exports.getMonsterWeakPoints = exports.getMonsterHabitat = exports.getMonster = exports.getAllMonsters = void 0;
const database_1 = require("../database/database");
const monstersQuery = "SELECT orden_menu, nombre, ruta, tipo, especie, fuego, agua, rayo, hielo, draco FROM monstruo ORDER BY orden_menu";
const monsterQuery = "SELECT orden_menu, nombre, ruta, especie, tipo, rango, caracteristicas, notas, tamano_min, tamano_max, fuego, agua, rayo, hielo, draco, veneno, sueno, paralisis, nitro, aturdimiento, elemento01, elemento02, resistencia01, resistencia02, resistencia03, estado01, estado02, estado03  FROM monstruo WHERE ruta = ?";
const habitatQuery = "SELECT h.habitat FROM monstruo AS m INNER JOIN monstruo_habitat AS mh ON m.id_monstruo = mh.id_monstruo INNER JOIN habitat AS h ON h.id_habitat = mh.id_habitat WHERE m.ruta = ?";
const weakPointsQuery = "SELECT MPD.corte, MPD.contundente, MPD.disparo, MPD.zona FROM monstruo_puntodebil AS MPD WHERE MPD.monstruo = ?";
const materialQuery = "SELECT MM.id_monstruo, MM.cortados, MM.rango, MM.frecuencia, M.nombre, M.icon FROM monstruo_material AS MM INNER JOIN material AS M ON M.id = MM.id_material WHERE MM.ruta = ? AND MM.rango = ? AND MM.cortados = ?";
const materialZoneQuery = "SELECT MRM.zona, MRM.rango, M.nombre, M.icon FROM monstruo_rangomaterial AS MRM INNER JOIN material AS M ON MRM.id_material01 = M.id WHERE MRM.ruta = ? AND MRM.rango = ?";
exports.getAllMonsters = (req, res) => {
    database_1.mysqlConnection.query(monstersQuery, (error, monsters) => {
        if (!error) {
            res.json(monsters);
        }
        else {
            console.log(error);
            res.sendStatus(500);
        }
    });
};
exports.getMonster = (req, res) => {
    const monsterId = req.params.id;
    database_1.mysqlConnection.query(monsterQuery, [monsterId], (error, monster) => {
        if (!error) {
            res.send(monster[0]);
        }
        else {
            console.log(error);
            res.sendStatus(500);
        }
    });
};
exports.getMonsterHabitat = (req, res) => {
    const monsterId = req.params.id;
    database_1.mysqlConnection.query(habitatQuery, [monsterId], (error, habitat) => {
        if (!error) {
            res.json(habitat);
        }
        else {
            console.log(error);
            res.sendStatus(500);
        }
    });
};
exports.getMonsterWeakPoints = (req, res) => {
    const monsterId = req.params.id;
    database_1.mysqlConnection.query(weakPointsQuery, [monsterId], (error, weakPoints) => {
        if (!error) {
            res.json(weakPoints);
        }
        else {
            console.log(error);
            res.sendStatus(500);
        }
    });
};
exports.getMonsterMaterials = (req, res) => {
    const monsterId = req.params.id;
    const monsterRango = req.params.idRango;
    const monsterCorte = req.params.idCorte;
    database_1.mysqlConnection.query(materialQuery, [monsterId, monsterRango, monsterCorte], (error, materials) => {
        if (!error) {
            res.json(materials);
        }
        else {
            console.log(error);
            res.sendStatus(500);
        }
    });
};
exports.getMonsterMaterialByZone = (req, res) => {
    const monsterId = req.params.id;
    const monsterRank = req.params.rango;
    database_1.mysqlConnection.query(materialZoneQuery, [monsterId, monsterRank], (error, materialByZone) => {
        if (!error) {
            res.json(materialByZone);
        }
        else {
            console.log(error);
            res.sendStatus(500);
        }
    });
};
