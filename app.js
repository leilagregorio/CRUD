const express = require("express");
const app = express();
require("dotenv").config();

//app.use(express.urlencoded());

app.set("view engine","ejs");
app.set("views", "./src/views");

const connection = require("./src/models/connection");

app.get("/", (req,res) => {
    res.render("index");
}); 
app.use("/posts",require("./src/routes/posts"));



const PORT =process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));