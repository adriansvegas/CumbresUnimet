import React, { useState } from 'react'; 
import Booking from './Booking'; // Importamos el componente Booking

const Destinations = () => {
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);

  // Lista de destinos
  const destinos = [
    {
      name: 'Ruta El Ávila',
      difficulty: 'Moderada',
      duration: '3 horas',
      pointsOfInterest: ['Mirador de la Guaira', 'Cascada de los Cuentos'],
      image: 'ruta-el-avila.jpg',
    },
    {
      name: 'Cerro Autana',
      difficulty: 'Alta',
      duration: '5 horas',
      pointsOfInterest: ['Punto Panorámico', 'Río Autana'],
      image: 'cerro-autana.jpg',
    },
    // Agrega más destinos según sea necesario
  ];

  const manejarClickReservar = (destino) => {
    setDestinoSeleccionado(destino);
  };

  const DestinationCard = ({ destination, onReservar }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{destination.name}</h2>
          <p>Dificultad: {destination.difficulty}</p>
          <p>Duración: {destination.duration}</p>
          <p>Puntos de interés: {destination.pointsOfInterest.join(', ')}</p>
          <button
            onClick={onReservar}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Reservar
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 bg-gray-100">
      {destinoSeleccionado ? (
        <Booking destination={destinoSeleccionado} />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Destinos de Excursión</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinos.map((destino, index) => (
              <DestinationCard
                key={index}
                destination={destino}
                onReservar={() => manejarClickReservar(destino)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Destinations;
