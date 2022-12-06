const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views", "./src/views");

app.get("/", (req,res) => {
    res.send("CRUD");
}); 
app.use("/posts",require("./src/routes/posts"));

const PORT = 8080;
app.listen(PORT,()=>console.log('http://localhost:${PORT}'));