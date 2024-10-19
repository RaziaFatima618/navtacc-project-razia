import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {

    localStorage.removeItem('token');

    navigate('/login');

  };



  const isAuthenticated = !!localStorage.getItem('token');
  return (

    <nav className="bg-blue-800 text-black">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16">

          <div className="flex items-center">

            <a href="/" className="text-2xl font-bold text-white">Book Library App</a>

            <div className="hidden md:block ml-10 space-x-4">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            <Link to="/dashboard/books" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
              
            </div>

          </div>

          <div className="flex items-center">
          {!isAuthenticated && <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>}

          {!isAuthenticated && <Link to="/register" className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium">Register</Link>}
            
          </div>
          {isAuthenticated && (

              <button onClick={handleLogout} className="text-white">Logout</button>

)}
        </div>

      </div>

    </nav>

  );

};



export default Navbar;

