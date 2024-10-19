import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      {/* Profile Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">xyz</p>
            <button
              onClick={toggleDropdown}
              className="text-sm text-gray-400 hover:text-gray-200 focus:outline-none"
            >
              {isDropdownOpen ? 'Close Menu' : 'Open Menu'}
            </button>
          </div>
        </div>
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="mt-2 bg-gray-700 rounded-lg shadow-lg py-2">
            
              <Link to="/dashboard/profile" className="block px-4 py-2 text-sm hover:bg-gray-600">
              Profile
              </Link>
              
            
              <Link to="/dashboard/settings" className="block px-4 py-2 text-sm hover:bg-gray-600">
              Settings
              </Link>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600">
              Logout
            </a>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
      <Link to="/dashboard" className="block py-2.5 px-4 rounded hover:bg-gray-700">Home</Link>
        <Link to="/dashboard/books" className="block py-2.5 px-4 rounded hover:bg-gray-700">Books</Link>
      </nav>
    </div>
  );
};

export default Sidebar;