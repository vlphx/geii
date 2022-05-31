const db = require("../models");
const Classe = db.classeModel;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Classe
  const classe = {
    classe_id: req.body.classe_id,
    classe_name: req.body.classe_name,
    // created_at: req.body.created_at,
    // updated_at: req.body.updated_at
  };

  // Save classe in the database
  Classe.create(classe)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the classe.",
      });
    });
};

exports.findAll = (req, res) => {
  Classe.findAll({
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Classes.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Classe.findByPk(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Classe with id=" + id,
      });
    });
};

// Delete a Classe with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Classe.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Classe was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete Classe with id=${id}. Maybe Classe was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not Classe Classe with id=" + id,
      });
    });
};
