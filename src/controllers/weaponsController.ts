import { Request, Response } from "express";
import { mysqlConnection } from "../database/database";
import { MysqlError } from "mysql";

export const getAllWeapons = (req: Request, res: Response) => {
  const weaponsQuery =
    "SELECT nombre, rama, rama_evo, ruta, rareza, evolucion, tipo, tipo_arma, precio, ataque, danio_elemento01, elemento_01, elemento01, danio_elemento02, elemento_02, elemento02, afilado, afinidad, defensa, sello_ancianos, ranura01, ranura02, ranura03, tipo_vial, danio_vial, elemento_vial, numero_disparos, tipo_disparo, nota01, nota02, nota03, modificaciones, desvio, tiro_especial, bonus_kinsecto, vial01, vial02, vial03, vial04, vial05 FROM arma";
  mysqlConnection.query(weaponsQuery, (error: MysqlError | null, weapon) => {
    if (!error) {
      if (weapon !== undefined) {
        res.json(weapon);
      } else {
        res.sendStatus(400);
      }
    } else {
      console.log(error);
      console.log(res.statusCode);
      res.sendStatus(500);
    }
  });
};
