import React from 'react';



import Header from '../components/Header';

import Footer from '../components/Footer';




const Home = () => {

  return (

    <div>

      {/* Navbar */}

      



      {/* Header Section */}

      <Header />



      {/* Main Content */}

      <main className="flex flex-col items-center justify-center py-20 px-4">

        <h2 className="text-3xl font-semibold mb-8">"Your Reading Journey Starts Here"</h2>

        <p className="text-center text-lg max-w-3xl mb-12">

            Book Library App, your ultimate library companion! Whether you're a bookworm, a student, or just looking for your next great read, our app connects you to a vast collection of books and resources.


        </p>

        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">

          Learn More

        </button>

      </main>



      {/* Footer */}

      <Footer />

    </div>

  );

};



export default Home;