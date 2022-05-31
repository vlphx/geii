const db = require("../models");
const { role } = db.initModels;
// const User = db.userModel;
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
  const roles = {
    role_name: req.body.role_name,
    // created_at: req.body.created_at,
    // updated_at: req.body.updated_at
  };

  // Save role in the database
  role.create(roles)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the role.",
      });
    });
};

exports.findAll = (req, res) => {
  role.findAll({
    //     include: [
    //   { 
    //     model: User,
    //     as: 'user',
    //     attributes: ["user_id", "user_pwd", "user_name", "user_firstname", "user_tel", "user_mail", "user_address", "user_siret", "account_validity"],
    //     through: {
    //       attributes: ["role_id", "user_id"]
    //     }
    //   }

    // ]
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving roles.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  role.findByPk(id, { 
  //           include: [
  //     { 
  //       model: User,
  //       as: 'user',
  //       attributes: ["user_id", "user_pwd", "user_name", "user_firstname", "user_tel", "user_mail", "user_address", "user_siret", "account_validity"],
  //       through: {
  //         attributes: ["role_id", "user_id"]
  //       }
  //     }

  //   ]
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving role with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  role.update(req.body, {
    where: {id: id},
  //           include: [
  //     { 
  //       model: User,
  //       as: 'user',
  //       attributes: ["user_id", "user_pwd", "user_name", "user_firstname", "user_tel", "user_mail", "user_address", "user_siret", "account_validity"],
  //       through: {
  //         attributes: ["role_id", "user_id"]
  //       }
  //     }

  //   ]
  })
    .then(() => {
      res.status(200).send({ message: "Tag was updated successfully", });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving role with id=" + id,
      });
    });
};

// Delete a role with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  role.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "role was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete role with id=${id}. Maybe role was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not role role with id=" + id,
      });
    });
};
