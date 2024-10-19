import { useState, useEffect } from 'react';



function BookForm({ onAddBook, onUpdateBook, editingBook, setEditingBook }) {

  const [title, setTitle] = useState('');

  const [author, setAuthor] = useState('');

  const [read, setRead] = useState(false);



  // Populate form fields when editing

  useEffect(() => {

    if (editingBook) {

      setTitle(editingBook.title);

      setAuthor(editingBook.author);

      setRead(editingBook.read);

    } else {

      setTitle('');

      setAuthor('');

      setRead(false);

    }

  }, [editingBook]);



  const handleSubmit = (e) => {

    e.preventDefault();



    if (editingBook) {

      onUpdateBook(editingBook._id, { title, author, read });

    } else {

      onAddBook({ title, author, read });

    }



    // Clear form fields

    setTitle('');

    setAuthor('');

    setRead(false);

    setEditingBook(null);

  };



  return (


<div >

<div className=" flex items-center justify-center">

<div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">

  <h2 className="text-3xl font-bold text-center text-gray-900">Books</h2>

  <form onSubmit={handleSubmit} className="mt-8 space-y-6">

    <div className="rounded-md shadow-sm -space-y-px">

      <div>

        <label htmlFor="full-Name" className="sr-only">Full Name</label>

        <input

type="text" value={title}

onChange={(e) => setTitle(e.target.value)} placeholder="Title" 

          required

          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"

          

        />

      </div>

      <div>

        <label  className="sr-only">Author</label>

        <input

type="text" value={author}

onChange={(e) => setAuthor(e.target.value)} placeholder="Author" 

          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"

          

        />

      </div>

      
      

    </div>



    <div className="flex items-center justify-between">

      <div className="flex items-center">

        <input
         type="checkbox"

checked={read}

onChange={(e) => setRead(e.target.checked)}


          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"

        />

        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">

          I have read this book

        </label>

      </div>

    </div>



    <div>

      <button

        type="submit"

        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

      >

        Sign Up

      </button>

    </div>

  </form>

</div>

</div>
    

</div>
  );

}



export default BookForm;