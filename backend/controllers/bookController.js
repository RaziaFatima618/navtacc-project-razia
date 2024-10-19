const Book = require('../models/Book');



exports.createBook = async (req, res) => {

  const { title, author, read } = req.body;



  try {

    const book = new Book({ title, author, read, user: req.user.id });

    await book.save();

    res.status(201).json(book);

  } catch (error) {

    res.status(500).json({ message: 'Server error' });

  }

};



exports.getBooks = async (req, res) => {

  try {

    const books = await Book.find({ user: req.user.id });

    res.json(books);

  } catch (error) {

    res.status(500).json({ message: 'Server error' });

  }

};



exports.updateBook = async (req, res) => {

  const { id } = req.params;

  const { title, author, read } = req.body;



  try {

    const book = await Book.findByIdAndUpdate(id, { title, author, read }, { new: true });

    if (!book) return res.status(404).json({ message: 'Book not found' });



    res.json(book);

  } catch (error) {

    res.status(500).json({ message: 'Server error' });

  }

};



exports.deleteBook = async (req, res) => {

  const { id } = req.params;



  try {

    const book = await Book.findByIdAndDelete(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });



    res.json({ message: 'Book deleted' });

  } catch (error) {

    res.status(500).json({ message: 'Server error' });

  }

};