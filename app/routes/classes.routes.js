module.exports = app => {
    const classe = require("../controllers/classe.controller.js");

    var router = require("express").Router();

    // Create a new rle 
    router.post("/",  classe.create);

    // Retrieve all tag
    router.get("/", classe.findAll);

    // Retrieve a single classe with id
    router.get("/:id", classe.findOne);

    // Update a classe with id
    router.put("/:id", classe.update);

    // Delete a classe with id (verify if a valid token is in the request and if the user is an admin)
    router.delete("/:id",  classe.delete);



    app.use('/classe', router);
};