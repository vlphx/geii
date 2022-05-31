const db = require("../models");
const { user, matiere, role, classe, offres } = db.initModels;
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

  // Create a user
  const userObject = {
    user_id: req.body.user_id,
    user_pwd: req.body.user_pwd,
    user_name: req.body.user_name,
    user_firstname: req.body.user_firstname,
    user_tel: req.body.user_tel,
    user_mail: req.body.user_mail,
    user_address:req.body.user_address,
    user_siret: req.body.user_siret,
    account_validity: req.body.account_validity
    // created_at: req.body.created_at,
    // updated_at: req.body.updated_at
  };

  // Save user in the database
  user.create(userObject)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

exports.findAll = (req, res) => {
  user.findAll({
    include: [
      { 
        model: role,
        as: 'role',
        attributes: ["role_id", "role_name"],
        through: {
          attributes: ["role_id", "user_id"]
        }
      },
            { 
        model: classe,
        as: 'classe',
        attributes: ["classe_id", "classe_name"],
        through: {
          attributes: ["classe_id", "user_id"]
        }
      },
            { 
        model: offres,
        as: 'offres',
        attributes: ["offre_id", "offre_name", "offre_type"],
        through: {
          attributes: ["offre_id", "user_id"]
        }
      },
            { 
        model: matiere,
        as: 'matiere',
        attributes: ["matiere_id", "matiere_name"],
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
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  user.findByPk(id, { 
        include: [
      { 
        model: role,
        as: 'role',
        attributes: ["role_id", "role_name"],
        through: {
          attributes: ["role_id", "user_id"]
        }
      },
            { 
        model: classe,
        as: 'classe',
        attributes: ["classe_id", "classe_name"],
        through: {
          attributes: ["classe_id", "user_id"]
        }
      },
            { 
        model: offres,
        as: 'offres',
        attributes: ["offre_id", "offre_name", "offre_type"],
        through: {
          attributes: ["offre_id", "user_id"]
        }
      },
                        { 
        model: matiere,
        as: 'matiere',
        attributes: ["matiere_id", "matiere_name"],
        through: {
          attributes: ["matiere_id", "user_id", "note"]
        }
      }

    ]
  } )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id,
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  user.update(req.body, {
    where: {id: id},
  //           include: [
  //     { 
  //       model: user,
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


// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  user.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "user was deleted successfully!",
        });
      } else {
        res.status(400).send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not user user with id=" + id,
      });
    });
};
