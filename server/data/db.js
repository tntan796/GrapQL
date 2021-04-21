const Book = require('../models/Book');
const Author = require('../models/Author');
const { books } = require('./static');

const mongoDataMethods = {
    getAllBooks: async(condition = null) => condition == null ? await Book.find() : await Book.find(condition),

    getBook: async(args) => await Book.findById(args),

    
    createBook: async args => {
        const newBook = new Book(args);
        return await newBook.save();
    },

    getAllAuthors: async() => await Author.find(),

    getAuthor: async(args) => {
        return await Author.findById(args)
    },

    createAuthor: async (args) => {
        const newAuthor = new Author(args);
        return await newAuthor.save();
    }
}

module.exports = mongoDataMethods