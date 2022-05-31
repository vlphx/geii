const db = require("../models");
const User = db.userModel;
const Role = db.roleModel;
const Classe = db.classeModel;
const Offres = db.offresModel;
const Matiere = db.matiereModel;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a User
  const user = {
      user_id: req.body.user_id,
      user_pwd: req.body.user_pwd,
    user_name: req.body.user_name,
    user_firstname: req.body.user_firstname,
    user_tel: req.body.user_tel,
    user_mail: req.body.user_mail,
    user_address:req.body.user_address,
    user_siret: req.body.user_siret,
    account_validity: req.body.account_validity
    // created_at: req.body.created_at,
    // updated_at: req.body.updated_at
  };

  // Save User in the database
  User.create(user)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

exports.findAll = (req, res) => {
  User.findAll({
    include: [
      { 
        model: Role,
        as: 'role',
        attributes: ["role_id", "role_name"],
        through: {
          attributes: ["role_id", "user_id"]
        }
      },
            { 
        model: Classe,
        as: 'classe',
        attributes: ["classe_id", "classe_name"],
        through: {
          attributes: ["classe_id", "user_id"]
        }
      },
            { 
        model: Offres,
        as: 'offres',
        attributes: ["offre_id", "offre_name", "offre_type"],
        through: {
          attributes: ["offre_id", "user_id"]
        }
      },
            { 
        model: Matiere,
        as: 'matiere',
        attributes: ["matiere_id", "matiere_name"],
        through: {
          attributes: ["matiere_id", "user_id", "note"]
        }
      }

    ]
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id, { 
        include: [
      { 
        model: Role,
        as: 'role',
        attributes: ["role_id", "role_name"],
        through: {
          attributes: ["role_id", "user_id"]
        }
      },
            { 
        model: Classe,
        as: 'classe',
        attributes: ["classe_id", "classe_name"],
        through: {
          attributes: ["classe_id", "user_id"]
        }
      },
            { 
        model: Offres,
        as: 'offres',
        attributes: ["offre_id", "offre_name", "offre_type"],
        through: {
          attributes: ["offre_id", "user_id"]
        }
      },
                        { 
        model: Matiere,
        as: 'matiere',
        attributes: ["matiere_id", "matiere_name"],
        through: {
          attributes: ["matiere_id", "user_id", "note"]
        }
      }

    ]
  } )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id,
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "User was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not User User with id=" + id,
      });
    });
};
