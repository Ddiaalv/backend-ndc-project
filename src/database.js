const mysql = require('mysql');
require('dotenv').config();

const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

mysqlConnection.connect(function(error) {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log('La base de datos se ha conectado correctamente.');
  }
});

module.exports = mysqlConnection;
