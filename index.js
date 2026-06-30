// requiring important packages
const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const Book = require("./models/book");
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

// This catches requests to the home page
app.get('/', (req, res) => {
    res.redirect('/books');  
});

// index route
app.get("/books", async (req, res) => {
  let books = await Book.find({});
  res.render("index.ejs", {books});
});

// new route
app.get("/books/new", (req, res) => {
  res.render("new.ejs");
});

// create route
app.post("/books", (req, res) => {
  let {book_name, author_name, genre, price, description} = req.body;
  let result = Book.insertOne({book_name: book_name, author_name: author_name, genre: genre, price: price, description: description});
  res.redirect("/books");
});

// view route
app.get("/books/view/:id", async(req, res) => {
  let {id} = req.params;
  let book = await Book.findOne({_id: id});
  res.render("view.ejs", {book});
});

// edit route
app.get("/books/:id/edit", async(req, res) => {
  let {id} = req.params;
  let book = await Book.findOne({_id: id});
  // res.send("working");
  res.render("edit.ejs", {book});
});

// update route
app.patch("/books/:id", async(req, res) => {
  let {id} = req.params;
  let {book_name: newBookName, author_name: newAuthorName, genre: newGenre, price: newPrice, description: newDescription} = req.body;
  let updation = await Book.findByIdAndUpdate(`${id}`, {book_name: newBookName, author_name: newAuthorName, genre: newGenre, price: newPrice, description: newDescription});
  res.redirect("/books");
});

// destroy route
app.delete("/books/:id", async(req, res) => {
    let {id} = req.params;
    let book = await Book.deleteOne({_id: id});
    res.redirect("/books");
});

// server listen setup
app.listen(8080, () => {
    console.log(`Server is running`);
});