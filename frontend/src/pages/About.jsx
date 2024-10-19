import React from 'react';



import Footer from '../components/Footer';

import backgroundImage from '../assets/about-bg.jpg'; // Import a different background image for the About page



const About = () => {

  return (

    <div>

      {/* Navbar */}

     



      {/* Header Section */}

      <header

       className="relative bg-cover bg-center text-white py-20 text-center"

        style={{ backgroundImage: `url(${backgroundImage})` }}

      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

<div className="relative z-10 flex flex-col items-center justify-center py-20 px-4">

        <h1 className="text-4xl font-bold">About Us</h1>

        <p className="text-center text-lg max-w-3xl mb-12">
        At Book Library App, we believe that every reader deserves access to a world of knowledge and imagination.Our mission is to connect you with the resources you need to foster a love of reading and lifelong learning.


      </p>
</div>
      </header>



      {/* Main Content */}

      <main className="flex flex-col items-center justify-center py-20 px-4">

        <h2 className="text-3xl font-semibold mb-8">Our Vision</h2>

        <p className="text-center text-lg max-w-3xl mb-12">

          At Book Lbrary App, We envision a world where everyone has the opportunity to explore new ideas, discover diverse perspectives, and ignite their imagination through reading. Our app is designed to empower you on your literary journey, making it easier than ever to find your next great read.


        </p>

        <h2 className="text-3xl font-semibold mb-8">Our Team</h2>

        <p className="text-center text-lg max-w-3xl mb-12">

        At Book Library App, we are a dedicated group of book lovers, technology enthusiasts, and community advocates committed to enhancing your reading experience. Our diverse team brings together a wealth of knowledge and passion for literature and technology.
        Our Team Members (1.[Razia Fatima], [Student of Full Stack Dvelopment], 2[Javeria], [Student of Full Stack Dvelopment]) We believe in the transformative power of books and strive to share that passion with our users.


        </p>

      </main>



      {/* Footer */}

      <Footer />

    </div>

  );

};



export default About;