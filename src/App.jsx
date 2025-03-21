import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Info from './components/Info';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Register from './components/Register';
import Foro from './components/Foro';
import InfoRoutes from './components/InfoRoutes'; // Import the new InfoRoutes component
import RouteInfo from './components/RouteInfo'; // Import the new RouteInfo component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/info" element={<Info />} />
        <Route path="/info/:routeId" element={<InfoRoutes />} /> {/* Add route for InfoRoutes */}
        <Route path="/route-info/:routeId" element={<RouteInfo />} /> {/* Add route for RouteInfo */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking/:destinationId" element={<Booking />} />
        <Route path="/foro" element={<Foro />} />
      </Routes>
    </Router>
  );
};

export default App;
