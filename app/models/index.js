const dbConfig = require("../config/db.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.roleModel = require("../models/role.js")(
//   sequelize,
//   Sequelize.DataTypes
// );

// db.userModel = require("../models/user.js")(
//   sequelize,
//   Sequelize.DataTypes
// );

// db.classeModel = require("../models/classe.js")(
//   sequelize,
//   Sequelize.DataTypes
// );

// db.matiereModel = require("../models/matiere.js")(
//   sequelize,
//   Sequelize.DataTypes
// );

// db.supportCoursModel = require("../models/support_cours.js")(
//   sequelize,
//   Sequelize.DataTypes
// );

// db.offresModel = require("../models/offres.js")(
//   sequelize,
//   Sequelize.DataTypes
// );

db.initModels = require("../models/init-models.js")(sequelize, Sequelize.DataTypes);
module.exports = db;

