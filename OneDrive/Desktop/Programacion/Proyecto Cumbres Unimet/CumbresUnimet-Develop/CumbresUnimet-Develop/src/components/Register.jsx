import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import logo from '../assets/logo1.jpg';

const Register = () => {
  const [emailregister, setEmailregister] = useState('');
  const [passwordregister, setPasswordregister] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError(null);
      await createUserWithEmailAndPassword(auth, emailregister, passwordregister);
      alert('Usuario creado con éxito');
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
          Registro
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center italic">
          Crea tu cuenta para unirte a la comunidad.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              value={emailregister}
              onChange={(e) => setEmailregister(e.target.value)}
              className="border rounded-md p-3 w-full focus:ring focus:ring-blue-200"
              placeholder="Tu correo electrónico"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Contraseña:</label>
            <input
              type="password"
              value={passwordregister}
              onChange={(e) => setPasswordregister(e.target.value)}
              className="border rounded-md p-3 w-full focus:ring focus:ring-blue-200"
              placeholder="Tu contraseña"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition duration-200 cursor-pointer"
          >
            {loading ? 'Cargando...' : 'Registrarse'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;