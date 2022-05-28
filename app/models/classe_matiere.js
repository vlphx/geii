const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classe_matiere', {
    matiere_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'matiere',
        key: 'matiere_id'
      }
    },
    classe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'classe',
        key: 'classe_id'
      }
    }
  }, {
    sequelize,
    tableName: 'classe_matiere',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "matiere_id" },
          { name: "classe_id" },
        ]
      },
      {
        name: "classe_matiere_classe0_FK",
        using: "BTREE",
        fields: [
          { name: "classe_id" },
        ]
      },
    ]
  });
};
