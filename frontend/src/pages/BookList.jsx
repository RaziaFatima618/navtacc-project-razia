import React from 'react';



const BookList = ({ books }) => {

  return (

    <div>

      <h2 className="text-xl mb-2">Books</h2>

      <ul className="list-disc pl-5">

        {books.map((book) => (

          <li key={book._id} className="mb-1">

            <strong>{book.title}</strong> by {book.author} {book.read ? '(Read)' : '(Not Read)'}

          </li>

        ))}

      </ul>

    </div>

  );

};



export default BookList;