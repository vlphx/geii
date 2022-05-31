const db = require("../models");
const { matiere } = db.initModels;
// const User = db.userModel;
const Op = db.Sequeliz


exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a matiere
  const matiereObject = {
    matiere_id: req.params.matiere_id,
    matiere_name: req.body.matiere_name,
    // created_at: req.body.created_at,
    // updated_at: req.body.updated_at
  };

  // Save matiere in the database
  matiere.create(matiereObject)
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
  matiere.findAll({
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

  matiere.findByPk(id, { 
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
        message: "Error retrieving matiere with id=" + id,
      });
    });
};



exports.update = (req, res) => {
  const id = req.params.id;

  matiere.update(req.body, {
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
      res.status(200).send({ message: "user was updated successfully", });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id,
      });
    });
};



// Delete a matiere with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  matiere.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "matiere was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete matiere with id=${id}. Maybe matiere was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not matiere matiere with id=" + id,
      });
    });
};
