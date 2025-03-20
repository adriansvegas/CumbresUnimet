import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [emaillogin, setEmaillogin] = useState('');
  const [Passwordlogin, setPasswordlogin] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const responsefirebase = await signInWithEmailAndPassword(auth, emaillogin, Passwordlogin);
      alert('Inicio de sesión correcto');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={emaillogin} 
          onChange={(e) => setEmaillogin(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={Passwordlogin} 
          onChange={(e) => setPasswordlogin(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        {error && <p className="text-red-500">{error}</p>} 
        <button 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          onClick={handleLogin}
        >
          Iniciar Sesión
        </button>
        {loading && <p className="text-gray-500">Cargando...</p>}
      </div>
    </div>
  );
};

export default Login;