module.exports = app => {
    const matiere = require("../controllers/matiere.controller.js");

    var router = require("express").Router();

    // Create a new rle 
    router.post("/",  matiere.create);

    // Retrieve all tag
    router.get("/", matiere.findAll);

    // Retrieve a single matiere with id
    router.get("/:id", matiere.findOne);

    // Update a matiere with id
    router.put("/:id", matiere.update);

    // Delete a matiere with id (verify if a valid token is in the request and if the matiere is an admin)
    router.delete("/:id",  matiere.delete);



    app.use('/matiere', router);
};