const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        book_name: {
            type: String,
            required: [true, "Book name field is empty"],
        },
        author_name: {
            type: String,
            required: [true, "Author name field is empty"],
        },
        genre: {
            type: String,
            required: [true, "Genre field is empty"],
        },
        price: {
            type: Number,
            required: [true, "Price field is empty"],
        },
        description: {
            type: String,
            required: [true, "Descript field is empty"],
            minLength: [10, "Description length must greater than 10"],
        }
    }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;