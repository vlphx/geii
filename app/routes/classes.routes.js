module.exports = app => {
    const classe = require("../controllers/classe.controller.js");

    var router = require("express").Router();

    // Create a new  
    router.post("/",  classe.create);

    // Retrieve all 
    router.get("/", classe.findAll);

    // Retrieve a single classe with id
    router.get("/:id", classe.findOne);

    // Update a classe with id
    router.put("/:id", classe.update);

    // Delete a classe with id
    router.delete("/:id",  classe.delete);



    app.use('/classe', router);
};