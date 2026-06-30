// requiring important packages
const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");
const app = express();

// middlewares and essential setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// MongoDB database connection
main().then(() => {console.log("MongoDB Connected")}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Bookstore');
}

// server listen setup
app.listen(8080, () => {console.log("server listening")});