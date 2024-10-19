
import { React, useState } from 'react';

import { login } from '../services/authService';

import { useNavigate } from 'react-router-dom';

import backgroundImage from '../assets/background.jpg'; // Import the image




const Login= () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await login({ email, password });

      navigate('/dashboard');

    } catch (error) {

      console.error(error);

      alert('Login failed');

    }

  };


  return (

    <div>

      {/* Navbar */}

     



      {/* Main Content */}

      <div className="flex h-screen">

        {/* Left Side - Image */}

        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>

        </div>



        {/* Right Side - Form */}

        <div className="w-1/2 flex items-center justify-center bg-gray-100">

          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">

            <h2 className="text-3xl font-bold text-center text-gray-900">Login</h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

              <div className="rounded-md shadow-sm -space-y-px">

                <div>

                  <label htmlFor="email" className="sr-only">Email address</label>

                  <input

type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" required

                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"

                    

                  />

                </div>

                <div>

                  <label htmlFor="password" className="sr-only">Password</label>

                  <input

type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" 
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"

                    

                  />

                </div>

              </div>



              <div className="flex items-center justify-between">

                <div className="flex items-center">

                  <input

                    id="remember-me"

                    name="remember-me"

                    type="checkbox"

                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"

                  />

                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">

                    Remember me

                  </label>

                </div>



                <div className="text-sm">

                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">

                    Forgot your password?

                  </a>

                </div>

              </div>



              <div>

                <button

                  type="submit"

                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                >

                  Sign in

                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  );

};



export default Login;