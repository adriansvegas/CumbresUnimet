import React, { useState } from 'react';
import logo from '../assets/logo1.jpg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Mensaje enviado por ${name}: ${message}`);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 min-h-screen"> 
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full shadow-md" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Contacto
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center italic">
          Envíanos tus preguntas y comentarios.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md p-2 w-full focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md p-2 w-full focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Mensaje:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded-md p-2 w-full focus:ring focus:ring-blue-200"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition duration-200 cursor-pointer" // cursor-pointer agregado aquí
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;