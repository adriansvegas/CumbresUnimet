// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth, googleProvider, facebookProvider } from '../firebase';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const handleLogin = async (provider) => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);

      navigate('/'); 

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />

        {error && <p className="text-red-500">{error}</p>} 
        <h1 className="text-2xl font-bold text-center mb-4">Registrarse</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button 
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200 mt-2"
          onClick={() => handleRegister(email, password)}
        >
          Registrarse
        </button>

        <button 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          onClick={() => handleLogin(googleProvider)}


        >
          Iniciar con Google
        </button>
        <button 
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200 mt-2"
          onClick={() => handleLogin(facebookProvider)}


        >
          Iniciar con Facebook
        </button>
        {loading && <p className="text-gray-500">Cargando...</p>}
      </div>
    </div>
  );
};

export default Login;
