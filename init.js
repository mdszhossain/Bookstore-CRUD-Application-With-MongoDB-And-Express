const mongoose = require('mongoose');
const Book = require("./models/book");
main().then(() => {console.log("MongoDB Connected")}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Bookstore');
}

const books = [
    {
        book_name: "Rich Dad Poor Dad",
        author_name: "Robert T.Kiyosaki",
        genre: "personal-finance",
        price: 15.00,
        description: "Rich dad poor dad is a personal finance related book.",
    },

    {
        book_name: "Atomic Habits",
        author_name: "James Clear",
        genre: "Habit Formation & Systems",
        price: 15.00,
        description: "If you want to change your habits, this book is for you.",
    },

    {
        book_name: "The 7 Habits of Highly Effective People",
        author_name: "Stephen R. Covey",
        genre: "Personal Leadership",
        price: 17.00,
        description: "This book give you rough idea about how a leader thinks.",
    },

    {
        book_name: "Mindset: The New Psychology of Success",
        author_name: "Carol S. Dweck",
        genre: "Cognitive Psychology",
        price: 14.00,
        description: "This book teach you about self growth and make mindset clear about goal",
    },

    {
        book_name: "The Subtle Art of Not Giving a F*ck",
        author_name: "Mark Manson",
        genre: "Realist Philosophy",
        price: 16.00,
        description: "This book can make you realistic thinking and make your life better.",
    },

    {
        book_name: "Deep Work",
        author_name: "Cal Newport",
        genre: "Focus & Productivity",
        price: 18.00,
        description: "To increase productivity on your daily life, this book helps a lot.",
    },

    {
        book_name: "How to Win Friends and Influence People",
        author_name: "Dale Carnegie",
        genre: "Social Skills & Communication",
        price: 16.00,
        description: "This book helps you to enhance your communicatio skill in society.",
    },

    {
        book_name: "The Power of Now",
        author_name: "Eckhart Tolle",
        genre: "Mindfulness & Mental Well-being",
        price: 13.00,
        description: "Wanna make your mind clear to your goal, this book can help you.",
    },

    {
        book_name: "Man's Search for Meaning",
        author_name: "Viktor E. Frankl",
        genre: "Existential Psychology",
        price: 11.00,
        description: "Make a clear dream and set the purpose is highlighted on this book",
    },

    {
        book_name: "Think and Grow Rich",
        author_name: "Napoleon Hil",
        genre: "Wealth Mindset & Motivation",
        price: 10.00,
        description: "Make your thinking like a wealthiest person and become rich and wealthy.",
    },
];

Book.insertMany(books);