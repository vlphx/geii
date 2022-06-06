const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_pwd: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    user_firstname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
        user_company_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_tel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_mail: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    user_address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_siret: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    account_validity: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
