
// https://www.bezkoder.com/sequelize-associate-many-to-many/
//const {createConnection}  = require('mysql');
module.exports ={
  host     : 'localhost',
  user     : 'oo',
  password : 'oo',
  database : 'geii_db2',
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
