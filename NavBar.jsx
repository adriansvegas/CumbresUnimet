import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-orange-400 p-4">
      <ul className="flex items-center space-x-6">
        <img
          src="/src/assets/logo1.jpg"
          alt="Avila"
          className="h-10 w-10 rounded-full mr-4"
        />
        <li>
          <Link to="/" className="text-white font-semibold hover:underline hover:text-gray-200 transition-colors duration-200">Inicio</Link>
        </li>
        <li>
          <Link to="/destinations" className="text-white font-semibold hover:underline hover:text-gray-200 transition-colors duration-200">Destinos</Link>
        </li>
        <li>
          <Link to="/info" className="text-white font-semibold hover:underline hover:text-gray-200 transition-colors duration-200">Información</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white font-semibold hover:underline hover:text-gray-200 transition-colors duration-200">Contacto</Link>
        </li>
        <li>
          <Link to="/login" className="text-white font-semibold hover:underline hover:text-gray-200 transition-colors duration-200">Iniciar Sesión</Link>
        </li>
        <li>
          <Link to="/register" className="text-white font-semibold hover:underline hover:text-gray-200 transition-colors duration-200">Registrarse</Link>
        </li>
        <li>
          <Link to="/Foro" className="text-white font-semibold hover:underline hover:text-gray-200 transition-colors duration-200">Foro</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;