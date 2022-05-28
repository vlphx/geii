const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classe', {
    classe_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    classe_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'classe',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "classe_id" },
        ]
      },
    ]
  });
};
