import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import About from './pages/About';

import Contact from './pages/Contact';

import Login from './pages/Login';

import Register from './pages/Register';

import Dashboard from './pages/Dashboard';

import Profile from './pages/Profile';

import Settings from './pages/Settings';

import Books from './pages/Books';

import Navbar from './components/Navbar';

import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (

    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={

<ProtectedRoute>

  <Dashboard />

</ProtectedRoute>

}>

<Route path="profile" element={<Profile />} />

<Route path="settings" element={<Settings />} />

<Route path="books" element={<Books />} />
        </Route>

      </Routes>

    </Router>

  );

}



export default App;