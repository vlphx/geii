var DataTypes = require("sequelize").DataTypes;
var _classe = require("./classe");
var _classe_matiere = require("./classe_matiere");
var _emploi_du_temps = require("./emploi_du_temps");
var _matiere = require("./matiere");
var _note = require("./note");
var _offres = require("./offres");
var _role = require("./role");
var _support_cours = require("./support_cours");
var _user = require("./user");
var _user_classe = require("./user_classe");
var _user_offre = require("./user_offre");
var _user_role = require("./user_role");

function initModels(sequelize) {
  var classe = _classe(sequelize, DataTypes);
  var classe_matiere = _classe_matiere(sequelize, DataTypes);
  var emploi_du_temps = _emploi_du_temps(sequelize, DataTypes);
  var matiere = _matiere(sequelize, DataTypes);
  var note = _note(sequelize, DataTypes);
  var offres = _offres(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var support_cours = _support_cours(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_classe = _user_classe(sequelize, DataTypes);
  var user_offre = _user_offre(sequelize, DataTypes);
  var user_role = _user_role(sequelize, DataTypes);

  classe.belongsToMany(matiere, { as: 'matiere_id_matieres', through: classe_matiere, foreignKey: "classe_id", otherKey: "matiere_id" });
  classe.belongsToMany(matiere, { as: 'matiere_id_matiere_emploi_du_temps', through: emploi_du_temps, foreignKey: "classe_id", otherKey: "matiere_id" });
  classe.belongsToMany(user, { as: 'user_id_user_user_classes', through: user_classe, foreignKey: "classe_id", otherKey: "user_id" });
  matiere.belongsToMany(classe, { as: 'classe_id_classes', through: classe_matiere, foreignKey: "matiere_id", otherKey: "classe_id" });
  matiere.belongsToMany(classe, { as: 'classe_id_classe_emploi_du_temps', through: emploi_du_temps, foreignKey: "matiere_id", otherKey: "classe_id" });
  matiere.belongsToMany(user, { as: 'user_id_users', through: note, foreignKey: "matiere_id", otherKey: "user_id" });
  offres.belongsToMany(user, { as: 'user_id_user_user_offres', through: user_offre, foreignKey: "offre_id", otherKey: "user_id" });
  role.belongsToMany(user, { as: 'user_id_user_user_roles', through: user_role, foreignKey: "role_id", otherKey: "user_id" });
  user.belongsToMany(classe, { as: 'classe_id_classe_user_classes', through: user_classe, foreignKey: "user_id", otherKey: "classe_id" });
  user.belongsToMany(matiere, { as: 'matiere_id_matiere_notes', through: note, foreignKey: "user_id", otherKey: "matiere_id" });
  user.belongsToMany(offres, { as: 'offre_id_offres', through: user_offre, foreignKey: "user_id", otherKey: "offre_id" });
  user.belongsToMany(role, { as: 'role_id_roles', through: user_role, foreignKey: "user_id", otherKey: "role_id" });
  classe_matiere.belongsTo(classe, { as: "classe", foreignKey: "classe_id"});
  classe.hasMany(classe_matiere, { as: "classe_matieres", foreignKey: "classe_id"});
  emploi_du_temps.belongsTo(classe, { as: "classe", foreignKey: "classe_id"});
  classe.hasMany(emploi_du_temps, { as: "emploi_du_temps", foreignKey: "classe_id"});
  user_classe.belongsTo(classe, { as: "classe", foreignKey: "classe_id"});
  classe.hasMany(user_classe, { as: "user_classes", foreignKey: "classe_id"});
  classe_matiere.belongsTo(matiere, { as: "matiere", foreignKey: "matiere_id"});
  matiere.hasMany(classe_matiere, { as: "classe_matieres", foreignKey: "matiere_id"});
  emploi_du_temps.belongsTo(matiere, { as: "matiere", foreignKey: "matiere_id"});
  matiere.hasMany(emploi_du_temps, { as: "emploi_du_temps", foreignKey: "matiere_id"});
  note.belongsTo(matiere, { as: "matiere", foreignKey: "matiere_id"});
  matiere.hasMany(note, { as: "notes", foreignKey: "matiere_id"});
  user_offre.belongsTo(offres, { as: "offre", foreignKey: "offre_id"});
  offres.hasMany(user_offre, { as: "user_offres", foreignKey: "offre_id"});
  user_role.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(user_role, { as: "user_roles", foreignKey: "role_id"});
  note.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(note, { as: "notes", foreignKey: "user_id"});
  support_cours.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(support_cours, { as: "support_cours", foreignKey: "user_id"});
  user_classe.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_classe, { as: "user_classes", foreignKey: "user_id"});
  user_offre.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_offre, { as: "user_offres", foreignKey: "user_id"});
  user_role.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_role, { as: "user_roles", foreignKey: "user_id"});

  return {
    classe,
    classe_matiere,
    emploi_du_temps,
    matiere,
    note,
    offres,
    role,
    support_cours,
    user,
    user_classe,
    user_offre,
    user_role,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
