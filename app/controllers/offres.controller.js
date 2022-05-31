const db = require("../models");
const Offres = db.offresModel;
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

  // Create a Offre
  const offres = {
        offre_id: req.body.offre_id,
    offre_name: req.body.offre_name,
    offre_type: req.body.offre_type,
    // created_at: req.body.created_at,
    // updated_at: req.body.updated_at
  };

  // Save Offre in the database
  Offres.create(offres)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the offre.",
      });
    });
};

exports.findAll = (req, res) => {
  Offres.findAll({
                    include: [
      { 
        model: User,
        as: 'user',
        attributes: ["user_id", "user_pwd", "user_name", "user_firstname", "user_tel", "user_mail", "user_address", "user_siret", "account_validity"],
        through: {
          attributes: ["offre_id", "user_id"]
        }
      }

    ]
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Offres.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Offres.findByPk(id, {
                        include: [
      { 
        model: User,
        as: 'user',
        attributes: ["user_id", "user_pwd", "user_name", "user_firstname", "user_tel", "user_mail", "user_address", "user_siret", "account_validity"],
        through: {
          attributes: ["offre_id", "user_id"]
        }
      }

    ]
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Offre with id=" + id,
      });
    });
};

// Delete a Offre with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Offres.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Offre was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete Offre with id=${id}. Maybe Offre was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not Offre Offre with id=" + id,
      });
    });
};
