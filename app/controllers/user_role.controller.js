const db = require("../models");
const { user_role } = db.initModels;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a role
  const userRoleObject = {
      role_id: req.body.role_id,
      user_id: req.body.user_id

  };

  // Save role in the database
  user_role.create(userRoleObject)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user_role.",
      });
    });
};

exports.findAll = (req, res) => {
  user_role.findAll({

  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving user_roles.",
      });
    });
};



// Delete a role with the specified id in the request
exports.delete = (req, res) => {
    const user_id = req.params.user_id;
    const role_id = req.params.role_id;

  role.destroy({
    where: { user_id: user_id, role_id: role_id},
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "user role was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete user role with id=${id}. Maybe role was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not role role with id=" + id,
      });
    });
};
