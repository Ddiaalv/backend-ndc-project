import { Request, Response } from "express";
import { mysqlConnection } from "../database/database";
import { MysqlError } from "mysql";
import { MonsterProps, MonstersProps } from "../models/MonsterModel";

export const getAllMonsters = (req: Request, res: Response) => {
  const monstersQuery =
    "SELECT orden_menu, nombre, ruta, tipo, especie, fuego, agua, rayo, hielo, draco FROM monstruo ORDER BY orden_menu";
  mysqlConnection.query(
    monstersQuery,
    (error: MysqlError | null, monsters: MonstersProps) => {
      if (!error) {
        res.json(monsters);
      } else {
        console.log(error);
        res.sendStatus(500);
      }
    }
  );
};

export const getMonster = (req: Request, res: Response) => {
  const monsterQuery =
    "SELECT orden_menu, nombre, ruta, especie, tipo, rango, caracteristicas, notas, tamano_min, tamano_max, fuego, agua, rayo, hielo, draco, veneno, sueno, paralisis, nitro, aturdimiento, elemento01, elemento02, resistencia01, resistencia02, resistencia03, estado01, estado02, estado03  FROM monstruo WHERE ruta = ?";
  const monsterId = req.params.id;
  mysqlConnection.query(
    monsterQuery,
    [monsterId],
    (error: MysqlError | null, monster: MonsterProps) => {
      if (!error) {
        res.send(monster[0]);
      } else {
        console.log(error);
        res.sendStatus(500);
      }
    }
  );
};

export const getMonsterHabitat = (req: Request, res: Response) => {
  const habitatQuery =
    "SELECT h.habitat FROM monstruo AS m INNER JOIN monstruo_habitat AS mh ON m.id_monstruo = mh.id_monstruo INNER JOIN habitat AS h ON h.id_habitat = mh.id_habitat WHERE m.ruta = ?";
  const monsterId = req.params.id;
  mysqlConnection.query(
    habitatQuery,
    [monsterId],
    (error: MysqlError | null, habitat) => {
      if (!error) {
        res.json(habitat);
      } else {
        console.log(error);
        res.sendStatus(500);
      }
    }
  );
};

export const getMonsterWeakPoints = (req: Request, res: Response) => {
  const weakPointsQuery =
    "SELECT MPD.corte, MPD.contundente, MPD.disparo, MPD.zona FROM monstruo_puntodebil AS MPD WHERE MPD.monstruo = ?";
  const monsterId = req.params.id;
  mysqlConnection.query(
    weakPointsQuery,
    [monsterId],
    (error: MysqlError | null, weakPoints) => {
      if (!error) {
        res.json(weakPoints);
      } else {
        console.log(error);
        res.sendStatus(500);
      }
    }
  );
};

export const getMonsterMaterials = (req: Request, res: Response) => {
  const materialQuery =
    "SELECT MM.id_monstruo, MM.cortados, MM.rango, MM.frecuencia, M.nombre, M.icon FROM monstruo_material AS MM INNER JOIN material AS M ON M.id = MM.id_material WHERE MM.ruta = ? AND MM.rango = ? AND MM.cortados = ?";
  const monsterId = req.params.id;
  const monsterRango = req.params.idRango;
  const monsterCorte = req.params.idCorte;

  mysqlConnection.query(
    materialQuery,
    [monsterId, monsterRango, monsterCorte],
    (error: MysqlError | null, materials) => {
      if (!error) {
        res.json(materials);
      } else {
        console.log(error);
        res.sendStatus(500);
      }
    }
  );
};

export const getMonsterMaterialByZone = (req: Request, res: Response) => {
  const materialZoneQuery =
    "SELECT MRM.zona, MRM.rango, M.nombre, M.icon FROM monstruo_rangomaterial AS MRM INNER JOIN material AS M ON MRM.id_material01 = M.id WHERE MRM.ruta = ? AND MRM.rango = ?";
  const monsterId = req.params.id;
  const monsterRank = req.params.rango;
  mysqlConnection.query(
    materialZoneQuery,
    [monsterId, monsterRank],
    (error: MysqlError | null, materialByZone) => {
      if (!error) {
        res.json(materialByZone);
      } else {
        console.log(error);
        res.sendStatus(500);
      }
    }
  );
};
