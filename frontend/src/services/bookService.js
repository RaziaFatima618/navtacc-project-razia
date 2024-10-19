import axios from 'axios';



const API_URL = 'http://localhost:5000/api/books';



// Get all books for the authenticated user

export const getBooks = async () => {

  const token = localStorage.getItem('token');

  return await axios.get(API_URL, {

    headers: {

      Authorization: `Bearer ${token}`,

    },

  });

};



// Create a new book

export const createBook = async (bookData) => {

  const token = localStorage.getItem('token');

  return await axios.post(API_URL, bookData, {

    headers: {

      Authorization: `Bearer ${token}`,

    },

  });

};



// Update an existing book

export const updateBook = async (id, bookData) => {

  const token = localStorage.getItem('token');

  return await axios.put(`${API_URL}/${id}`, bookData, {

    headers: {

      Authorization: `Bearer ${token}`,

    },

  });

};



// Delete a book

export const deleteBook = async (id) => {

  const token = localStorage.getItem('token');

  return await axios.delete(`${API_URL}/${id}`, {

    headers: {

      Authorization: `Bearer ${token}`,

    },

  });

};