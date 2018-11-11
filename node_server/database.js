const mysql = require('mysql');

//var exports = module.exports = {};

module.exports.db = mysql.createPool({
    host: "192.168.64.1", //for OSX, alternatively use localhost
    user: "root",
    connectionLimit: 100,
    password: "",
    database: "stage"
});
