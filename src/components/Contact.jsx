import React, { useState } from 'react';

// ste componente proporciona un formulario de contacto para que los usuarios envíen mensajes.
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el mensaje
    console.log(`Mensaje enviado por ${name}: ${message}`);
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mensaje:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;