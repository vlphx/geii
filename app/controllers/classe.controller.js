const db = require("../models");
const { classe, user } = db.initModels;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a classe
  const classeObject = {
    classe_id: req.body.classe_id,
    classe_name: req.body.classe_name,
    // created_at: req.body.created_at,
    // updated_at: req.body.updated_at
  };

  // Save classe in the database
  classe.create(classeObject)
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
  classe.findAll({
            include: [
      { 
        model: User,
        as: 'user',
        attributes: ["user_id", "user_pwd", "user_name", "user_firstname", "user_tel", "user_mail", "user_address", "user_siret", "account_validity"],
        through: {
          attributes: ["classe_id", "user_id"]
        }
      }

    ]
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving classes.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  classe.findByPk(id, { 
      include: [
      { 
        model: User,
        as: 'user',
        attributes: ["user_id", "user_pwd", "user_name", "user_firstname", "user_tel", "user_mail", "user_address", "user_siret", "account_validity"],
        through: {
          attributes: ["classe_id", "user_id"]
        }
      }

    ]
  } )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving classe with id=" + id,
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  classe.update(req.body, {
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
      res.status(200).send({ message: "classe was updated successfully", });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving classe with id=" + id,
      });
    });
};

// Delete a classe with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  classe.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "classe was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete classe with id=${id}. Maybe classe was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not classe classe with id=" + id,
      });
    });
};
