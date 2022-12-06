const express = require("express");
const router = express.Router();

//CRUD
//Create show form
//C save date
//Read all register 
router.get("/", (req,res) =>  {
    res.render("posts/index");
});
//Read one register
//Update read one register, show form with information
//Update actualizo los datos del registro
//Delete register



module.exports = router;
