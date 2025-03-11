import React, { useState } from 'react';
import { auth, googleProvider, facebookProvider } from '../firebase';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (provider) => {
    setLoading(true);
    try {
      await auth.signInWithPopup(provider);
      // Redirigir a la página principal
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
        {error && <p className="text-red-500">{error}</p>}
        <button 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          onClick={() => handleLogin(googleProvider)}
        >
          Iniciar con Google
        </button>
        <button 
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition duration-200 mt-2"
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