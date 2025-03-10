// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Info from './components/Info';
import Contact from './components/Contact';
import Booking from './components/Booking';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking/:destinationId" element={<Booking />} />
      </Routes>
    </Router>
  );
};

export default App;