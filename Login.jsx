import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import logo from '../assets/logo1.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [emaillogin, setEmaillogin] = useState('');
  const [Passwordlogin, setPasswordlogin] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      await signInWithEmailAndPassword(auth, emaillogin, Passwordlogin);
      alert('Inicio de sesión correcto');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-8"> {/* Cambio: shadow-2xl */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full shadow-md" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Iniciar Sesión
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center italic">
          Ingresa tus credenciales para acceder.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              value={emaillogin}
              onChange={(e) => setEmaillogin(e.target.value)}
              className="border rounded-md p-3 w-full focus:ring focus:ring-blue-200"
              placeholder="Tu correo electrónico"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Contraseña:</label>
            <input
              type="password"
              value={Passwordlogin}
              onChange={(e) => setPasswordlogin(e.target.value)}
              className="border rounded-md p-3 w-full focus:ring focus:ring-blue-200"
              placeholder="Tu contraseña"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition duration-200 cursor-pointer"
          >
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta? <Link to="/register" className="text-blue-500 hover:underline">Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;