import { useEffect, useState } from 'react';

import { getBooks, createBook, updateBook, deleteBook } from '../services/bookService';

import BookForm from './BookForm';

import BookItem from './BookItem';



function Books() {

  const [books, setBooks] = useState([]);

  const [editingBook, setEditingBook] = useState(null);



  // Fetch books on component mount

  useEffect(() => {

    fetchBooks();

  }, []);



  const fetchBooks = async () => {

    try {

      const response = await getBooks();

      setBooks(response.data);

    } catch (error) {

      console.error(error);

    }

  };



  const handleAddBook = async (bookData) => {

    try {

      await createBook(bookData);

      fetchBooks();

    } catch (error) {

      console.error(error);

    }

  };



  const handleEditBook = (book) => {

    setEditingBook(book);

  };



  const handleUpdateBook = async (id, bookData) => {

    try {

      await updateBook(id, bookData);

      setEditingBook(null);

      fetchBooks();

    } catch (error) {

      console.error(error);

    }

  };



  const handleDeleteBook = async (id) => {

    try {

      await deleteBook(id);

      fetchBooks();

    } catch (error) {

      console.error(error);

    }

  };



  return (

    <div className="container mx-auto p-4">

      

      <BookForm

        onAddBook={handleAddBook}

        onUpdateBook={handleUpdateBook}

        editingBook={editingBook}

        setEditingBook={setEditingBook}

      />

      <div className="mt-6">

        {books.map((book) => (

          <BookItem

            key={book._id}

            book={book}

            onEdit={handleEditBook}

            onDelete={handleDeleteBook}

          />

        ))}

      </div>

    </div>

  );

}



export default Books;