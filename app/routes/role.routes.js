module.exports = app => {
    const role = require("../controllers/role.controller.js");

    var router = require("express").Router();

    // Create a new  
    router.post("/",  role.create);

    // Retrieve all 
    router.get("/", role.findAll);

    // Retrieve a single role with id
    router.get("/:id", role.findOne);

    // Update a role with id
    router.put("/:id", role.update);

    // Delete a role with id 
    router.delete("/:id",  role.delete);



    app.use('/role', router);
};