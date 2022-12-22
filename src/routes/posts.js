const express = require("express");
const router = express.Router();

//CRUD
//Create show form
router.get("/create", (req, res) => {
    res.render("posts/create");
 });
//C save date
router.post("/store", (req, res) => {
    console.log(req.body);
    res.send("Guardado");
})
//Read all register 
router.get("/", (req,res) =>  {
    res.render("posts/index");
});
//Read one register
router.get("/:id",(req,res) => {
    res.render("posts/show",{id: req.params.id});
 });
//Update read one register, show form with information
//Update actualizo los datos del registro
//Delete register



module.exports = router;
