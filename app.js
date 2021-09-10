var dotenv=require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const mongoduri = process.env.MONGOURI;

mongoose.connect("mongodb://localhost/todo_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");




app.use(require("./routes/index"))
app.use(require("./routes/todo"))



app.listen(process.env.PORT);
