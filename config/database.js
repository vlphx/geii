import mysql from mysql2;

//create the connection to the BDD
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "geii",
});

export default db;