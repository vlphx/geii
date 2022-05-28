const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('support_cours', {
    sc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sc_nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sc_lien_cours: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'support_cours',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sc_id" },
        ]
      },
      {
        name: "support_cours_user_FK",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
