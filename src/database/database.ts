import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

export const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

mysqlConnection.connect((error: any) => {
  if (error) {
    console.log(error);
  } else {
    console.log("La base de datos se ha conectado correctamente.");
  }
});
