const mysql = require("mysql");
require("dotenv").config();


const connection = mysql.createConnection ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
}); 
connection.connect();
//connection.end(); finaliza la comunicacion con la base de datos
module.exports= connection;
