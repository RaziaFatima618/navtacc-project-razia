function BookItem({ book, onEdit, onDelete }) {

  return (

    <div className="border p-4 mb-2 flex justify-between items-center">

      <div>

        <h3 className="text-lg">{book.title}</h3>

        <p className="text-sm">Author: {book.author}</p>

        <p className="text-sm">Status: {book.read ? 'Read' : 'Unread'}</p>

      </div>

      <div>

        <button onClick={() => onEdit(book)} className="text-blue-500 mr-2">Edit</button>

        <button onClick={() => onDelete(book._id)} className="text-red-500">Delete</button>

      </div>

    </div>

  );

}



export default BookItem;

