module.exports = app => {
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();

    // Create a new rle 
    router.post("/",  user.create);

    // Retrieve all tag
    router.get("/", user.findAll);

    // Retrieve a single user with id
    router.get("/:id", user.findOne);

    // Update a user with id
    router.put("/:id", user.update);

    // Delete a user with id (verify if a valid token is in the request and if the user is an admin)
    router.delete("/:id",  user.delete);



    app.use('/user', router);
};