import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-orange-500 p-4">
      <ul className="flex space-x-8">
      <img src="/src/assets/logo1.jpg" alt="Avila" className="h-10 mr-4" />  
        <li>
          <Link to="/" className="text-white hover:underline">Inicio</Link>
        </li>
        <li>
          <Link to="/destinations" className="text-white hover:underline">Destinos</Link>
        </li>
        <li>
          <Link to="/info" className="text-white hover:underline">Información</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:underline">Contacto</Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:underline">Iniciar Sesión</Link>
        </li>
        <li>
          <Link to="/register" className="text-white hover:underline">Registrarse</Link>
        </li>
        <li>
          <Link to="/Foro" className="text-white hover:underline">Foro</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
