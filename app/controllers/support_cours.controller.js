const db = require("../models");
const { supportCours } = db.initModels;
// const user = db.userModel;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a supportCours
  const supportCoursObject = {

  };

  // Save supportCours in the database
  supportCours.create(supportCoursObject)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the supportCours.",
      });
    });
};

exports.findAll = (req, res) => {
  supportCours.findAll({
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving supportCourss.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  supportCours.findByPk(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving supportCours with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  supportCours.update(req.body, {
    where: {id: id},

  })
    .then(() => {
      res.status(200).send({ message: "supportCours was updated successfully", });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id,
      });
    });
};


// Delete a supportCours with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  supportCours.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "supportCours was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete supportCours with id=${id}. Maybe supportCours was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not supportCours supportCours with id=" + id,
      });
    });
};
