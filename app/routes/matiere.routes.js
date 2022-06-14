module.exports = app => {
    const matiere = require("../controllers/matiere.controller.js");

    var router = require("express").Router();

    // Create a new 
    router.post("/",  matiere.create);

    // Retrieve all 
    router.get("/", matiere.findAll);

    // Retrieve a single matiere with id
    router.get("/:id", matiere.findOne);

    // Update a matiere with id
    router.put("/:id", matiere.update);

    // Delete a matiere with id
    router.delete("/:id",  matiere.delete);



    app.use('/matiere', router);
};