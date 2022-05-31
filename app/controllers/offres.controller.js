const db = require("../models");
const Offres = db.offresModel;
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
  const offre = {
        offre_id: req.body.offre_id,
    offre_name: req.body.offre_name,
    offre_type: req.body.offre_type,
    // created_at: req.body.created_at,
    // updated_at: req.body.updated_at
  };

  // Save Offre in the database
  Offre.create(offre)
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
  Offre.findAll({
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

  Offre.findByPk(id)
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

  Offre.destroy({
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
