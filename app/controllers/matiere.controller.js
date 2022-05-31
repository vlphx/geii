const db = require("../models");
const Matiere = db.matiereModel;
const User = db.userModel;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Matiere
  const matiere = {
    matiere_id: req.params.matiere_id,
    matiere_name: req.body.matiere_name,
    // created_at: req.body.created_at,
    // updated_at: req.body.updated_at
  };

  // Save Matiere in the database
  Matiere.create(matiere)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the matiere.",
      });
    });
};

exports.findAll = (req, res) => {
  Matiere.findAll({
                    include: [
      { 
        model: User,
        as: 'user',
        attributes: ["user_id", "user_pwd", "user_name", "user_firstname", "user_tel", "user_mail", "user_address", "user_siret", "account_validity"],
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
        message: err.message || "Some error occurred while retrieving matieres.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Matiere.findByPk(id, { 
    include: [
      { 
        model: User,
        as: 'user',
        attributes: ["user_id", "user_pwd", "user_name", "user_firstname", "user_tel", "user_mail", "user_address", "user_siret", "account_validity"],
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
        message: "Error retrieving Matiere with id=" + id,
      });
    });
};

// Delete a matiere with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Matiere.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Matiere was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete Matiere with id=${id}. Maybe Matiere was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not Matiere Matiere with id=" + id,
      });
    });
};
