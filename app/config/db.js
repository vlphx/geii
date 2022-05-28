
//const {createConnection}  = require('mysql');
module.exports ={
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'geii_db',
  dialect: 'mysql',
  // First five parameters are for MySQL connection.
  // pool is optional, it will be used for Sequelize connection pool configuration:

  //     max: maximum number of connection in pool
  //     min: minimum number of connection in pool
  //     idle: maximum time, in milliseconds, that a connection can be idle before being released
  //     acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};



// export default db;
// sequelize-auto -h localhost -d geii_db -u root -x  -p 3306  --dialect mysql -c './app/config' -o './app/models' -t user