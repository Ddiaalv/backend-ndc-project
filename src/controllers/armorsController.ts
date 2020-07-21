import { Request, Response } from "express";
import { mysqlConnection } from "../database/database";
import { MysqlError } from "mysql";

export const getAllArmors = (req: Request, res: Response) => {
  const armorsQuery =
    "SELECT id, nombre, ruta, tipo, rama, rango, nivel, rareza, defensa, ranura01, ranura02, ranura03, vsfuego, vsagua, vsrayo, vshielo, vsdraco, precio, habilidad1, habilidad2 FROM armadura";
  mysqlConnection.query(armorsQuery, (error: MysqlError | null, armors) => {
    if (!error) {
      if (armors !== undefined) {
        res.json(armors);
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
