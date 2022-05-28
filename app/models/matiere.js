const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matiere', {
    matiere_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    matiere_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'matiere',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "matiere_id" },
        ]
      },
    ]
  });
};
