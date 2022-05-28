const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emploi_du_temps', {
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
    },
    edt_jour_debut: {
      type: DataTypes.DATE,
      allowNull: false
    },
    edt_jour_fin: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'emploi_du_temps',
    timestamps: false,
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
        name: "emploi_du_temps_classe0_FK",
        using: "BTREE",
        fields: [
          { name: "classe_id" },
        ]
      },
    ]
  });
};
