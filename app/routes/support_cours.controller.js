module.exports = app => {
    const supportCours = require("../controllers/support_cours.controller.js");

    var router = require("express").Router();

    // Create a new  
    router.post("/",  supportCours.create);

    // Retrieve all 
    router.get("/", supportCours.findAll);

    // Retrieve a single supportCours with id
    router.get("/:id", supportCours.findOne);

    // Update a supportCours with id
    router.put("/:id", supportCours.update);

    // Delete a supportCours with id 
    router.delete("/:id",  supportCours.delete);



    app.use('/supportCours', router);
};