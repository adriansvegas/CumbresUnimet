import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Register = () => {
  const [name, setName] = useState('');
  const [emailregister, setEmailregister] = useState('');
  const [passwordregister, setPasswordregister] = useState('');
  const [career, setCareer] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const responsefirebase = await createUserWithEmailAndPassword(auth, emailregister, passwordregister);
      alert('Usuario creado con éxito');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Registro</h1>
      <div className="border border-gray-300 rounded-lg p-4 w-80"> {/* Contenedor con borde */}
        <input 
          type="text" 
          placeholder="Nombre" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
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
        <input 
          type="text" 
          placeholder="Carrera que estudias" 
          value={career} 
          onChange={(e) => setCareer(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input 
          type="tel" 
          placeholder="Número de Teléfono" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 w-full"
          onClick={handleRegister}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Register;