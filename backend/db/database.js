const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    port: process.env.PORT_DB,
    password: process.env.PASSWORD
})

connection.connect (function (err) {
    try {
      console.log("Base de datos enlazada");
    } catch {
      console.log(err);
    }
  });

module.exports = connection; 