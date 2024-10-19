import React from 'react';



import Footer from '../components/Footer';

import backgroundImage from '../assets/contact-bg.jpg'; // Import the background image for the Contact page



const Contact = () => {

  return (

    <div>

      {/* Navbar */}

      



      {/* Header Section */}

      <header

        className="relative bg-cover bg-center text-white py-20 text-center"

        style={{ backgroundImage: `url(${backgroundImage})` }}

      >

        {/* Overlay */}
        <main className="flex flex-col items-center justify-center py-20 px-4">
        <div className="relative z-10">
        

          <h1 className="text-4xl font-bold">Contact Us</h1>

          <p className="text-center text-lg max-w-3xl mb-12">
            We would love to hear from you! At Book Lbrary App, your feedback and inquiries are important to us. 
            Whether you have questions, suggestions, or need assistance, we're here to help!

</p>

        </div>
        </main>
        
        <div className="absolute inset-0 bg-black opacity-50"></div>



      </header>



      {/* Main Content */}

      <main className="flex flex-wrap items-start justify-center py-20 px-4 bg-gray-100">

        {/* Left Half - Get in Touch */}

        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">

          <h2 className="text-3xl font-semibold mb-6">How to Reach Us
          </h2>

          <p className="text-lg mb-6">

            If you have any questions, feedback, or just want to say hello, we’re here to help. 

            Reach out to us via the contact form, and we’ll get back to you as soon as possible.

          </p>

          <p className="text-lg mb-6">

            You can also email us directly at <a href="mailto:info@libraryapp.com" className="text-indigo-600">info@bookapp.com</a> or call us at <a href="tel:+1234567890" className="text-indigo-600">+1 (234) 567-890</a>.

          </p>

              

          <h2 className="text-3xl font-semibold mb-6">Feedback
          </h2>

          <p className="text-lg mb-6">

          Your thoughts matter! If you have feedback about the app or suggestions for new features, please let us know. We’re always looking to improve your experience.


          </p>



          
          

        </div>



        {/* Right Half - Contact Form */}

        <div className="w-full lg:w-1/2 px-4">

          <div className="bg-white rounded-lg shadow-lg p-8">

            <form className="space-y-6">

              <div>

                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>

                <input

                  id="name"

                  name="name"

                  type="text"

                  required

                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                  placeholder="Your Full Name"

                />

              </div>

              <div>

                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>

                <input

                  id="email"

                  name="email"

                  type="email"

                  required

                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                  placeholder="Your Email Address"

                />

              </div>

              <div>

                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>

                <textarea

                  id="message"

                  name="message"

                  rows="4"

                  required

                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                  placeholder="Your Message"

                ></textarea>

              </div>

              <div>

                <button

                  type="submit"

                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                >

                  Send Message

                </button>

              </div>

            </form>

          </div>

        </div>

      </main>



      {/* Footer */}

      <Footer />

    </div>

  );

};



export default Contact;