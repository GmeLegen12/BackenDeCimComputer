const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "puntaflex"
});

mysqlConnection.connect((err) => {
    if(err){
        console.log(err);
    }
    else {
        console.log("la base de datos inicio correctamente");
    }
});
module.exports = mysqlConnection;

