const dbConfig = require("../config/db.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    // pool: {
    //   max: dbConfig.pool.max,
    //   min: dbConfig.pool.min,
    //   acquire: dbConfig.pool.acquire,
    //   idle: dbConfig.pool.idle
    // }
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.roleModel = require("../models/role.model.js")(
  sequelize,
  Sequelize.DataTypes
);

module.exports = db;

