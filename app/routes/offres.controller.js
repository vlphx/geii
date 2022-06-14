module.exports = app => {
    const offres = require("../controllers/offres.controller.js");

    var router = require("express").Router();

    // Create a new  
    router.post("/",  offres.create);

    // Retrieve all
    router.get("/", offres.findAll);

    // Retrieve a single offres with id
    router.get("/:id", offres.findOne);

    // Update a offres with id
    router.put("/:id", offres.update);

    // Delete a offres with id 
    router.delete("/:id",  offres.delete);



    app.use('/offres', router);
};