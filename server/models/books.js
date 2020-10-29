
/* 
File name: books.js
Author: Marianne Palmer
Student ID: 301122149
Web App Name: COMP229-F2020-MidTerm-301122149
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
