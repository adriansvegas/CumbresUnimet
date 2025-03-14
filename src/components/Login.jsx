// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

import  {auth}  from '../firebase';

// import { auth, googleProvider} from '../firebase';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [emaillogin, setEmaillogin] = useState('');
  const [Passwordlogin, setPasswordlogin] = useState('');
  const [emailregister, setEmailregister]= useState('');
  const [passwordregister, setPasswordregister] = useState('');
  

  const [error, setError] = useState(null);

  const handleRegister = async (emailregister, passwordregister) => {
    
    try {
      console.log(emailregister, passwordregister);
    const responsefirebase = await createUserWithEmailAndPassword(auth, emailregister, passwordregister);
    console.log(responsefirebase);
    alert('Usuario creado con exito');
      
    } catch (error) {
      alert(error.message);
    }
  }

  const handleLogin = async (emaillogin, Passwordlogin) => {
    
    try {
      console.log(emaillogin, Passwordlogin);
    const responsefirebase = await signInWithEmailAndPassword(auth, emaillogin, Passwordlogin);
    console.log(responsefirebase);
    alert('Inicio de sesion correcto');
      
    } catch (error) {
      alert(error.message);
    }
  }


  

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
        <h1 className="text-2xl font-bold text-center mb-4">Registrarse</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={emailregister} 
          onChange={(e) => setEmailregister(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={passwordregister} 
          onChange={(e) => setPasswordregister(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button 
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200 mt-2"
          onClick={() => handleRegister(emailregister, passwordregister)}
        >
          Registrarse
        </button>

        <button 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          onClick={() => handleLogin(emaillogin, Passwordlogin)}


        >
          Iniciar Sesion
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
