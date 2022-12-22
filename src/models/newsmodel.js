const db = require("./db");

const{ DataTypes } = require("sequelize");


const NewsModel = db.define("noticias", {
    title:{
        type: DataTypes.STRING,
    },
});
module.exports = NewsModel;
