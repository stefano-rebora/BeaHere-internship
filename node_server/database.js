const mysql = require('mysql');

//var exports = module.exports = {};

module.exports.db = mysql.createPool({
    host: "localhost",
    user: "root",
    connectionLimit: 100,
    password: "",
    database: "stage"
});