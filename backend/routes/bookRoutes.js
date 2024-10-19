const express = require('express');

const { createBook, getBooks, updateBook, deleteBook } = require('../controllers/bookController');

const auth = require('../middleware/auth');



const router = express.Router();



router.post('/', auth, createBook);

router.get('/', auth, getBooks);

router.put('/:id', auth, updateBook);

router.delete('/:id', auth, deleteBook);



module.exports = router;

