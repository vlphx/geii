const db = require("../models");
const SupportCours = db.supportCoursModel;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a SupportCours
  const supportCours = {

    // created_at: req.body.created_at,
    // updated_at: req.body.updated_at
  };

  // Save SupportCours in the database
  SupportCours.create(supportCours)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the SupportCours.",
      });
    });
};

exports.findAll = (req, res) => {
  SupportCours.findAll({
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving SupportCourss.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  SupportCours.findByPk(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving SupportCours with id=" + id,
      });
    });
};

// Delete a SupportCours with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  SupportCours.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "SupportCours was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete SupportCours with id=${id}. Maybe SupportCours was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not SupportCours SupportCours with id=" + id,
      });
    });
};
