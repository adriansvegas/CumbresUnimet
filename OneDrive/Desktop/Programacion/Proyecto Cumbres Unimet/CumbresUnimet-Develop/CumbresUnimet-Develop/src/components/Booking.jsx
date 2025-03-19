import React, { useState } from 'react';
// * Este componente permite a los usuarios realizar reservas para una excursión específica.
const Booking = ({ destination }) => {
  const [date, setDate] = useState('');
  const [participants, setParticipants] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
  //Este componente representa el modal de confirmación.
  const Modal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;
  /////FIXME - 
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="mb-4">{message}</p>
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };
  // Maneja la lógica de reservas.
  const manejarReservas = () => {
    if (!date) {
      alert('Por favor selecciona una fecha.');
      return;
    }
    if (participants < 1) {
      alert('El número de participantes debe ser al menos 1.');
      return;
    }

    setModalMessage(`Reserva realizada con éxito para ${participants} participantes en ${destination.name} para el ${date}.`);
    setIsModalOpen(true);

    console.log(`Reserva realizada para ${participants} participantes en ${destination.name} para el ${date}`);

    setDate('');
    setParticipants(1);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Reservar Excursión: {destination.name}</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Fecha:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Número de Participantes:</label>
          <input
            type="number"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            className="border rounded p-2 w-full"
            min="1"
            required
          />
        </div>
        <button
          onClick={manejarReservas}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
        >
          Confirmar Reserva
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
    </div>
  );
};

export default Booking;