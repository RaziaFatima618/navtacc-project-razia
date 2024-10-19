import { useState } from 'react';

import { login } from '../services/authService';

import { useNavigate } from 'react-router-dom';


function Login() {

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

    <div className="container mx-auto">

      <form onSubmit={handleSubmit}>

        <h2>Login</h2>

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" required />

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />

        <button type="submit">Login</button>

      </form>

    </div>

  );

}



export default Login;