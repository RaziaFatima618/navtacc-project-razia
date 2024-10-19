const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema({

  title: { type: String, required: true },

  author: { type: String, required: true },

  read: { type: Boolean, default: false },

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

});



module.exports = mongoose.model('Book', bookSchema);