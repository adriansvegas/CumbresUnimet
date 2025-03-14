import React, { useState } from 'react'; 
import Booking from './Booking'; // Importamos el componente Booking
import defaultImage from '../assets/react.svg'; // Usaremos este como imagen por defecto
import Sabasnieves from '../assets/sabas-nieves.jpg'; 
import Humboldt from '../assets/hotel-humboldt.jpg';
import Cruzavila from '../assets/cruz-avila.jpg';
import QuebradaChacaito from '../assets/quebrada-chacaito.jpg';
import Galipan from '../assets/galipan.jpg';
import Naiguata from '../assets/naiguata.jpg';

//Este componente representa una tarjeta de destino que muestra información sobre un destino específico y permite a los usuarios realizar una reserva.

const Destinations = () => {
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);

  // Lista de destinos
  const destinos = [
    {
      name: 'Ruta La Cruz del Avila',
      difficulty: 'Moderada',
      duration: '3 horas',
      pointsOfInterest: ['Mirador de la Guaira', 'Cascada de los Cuentos'],
      image: Cruzavila,
    },
    {
      name: 'Ruta al Humboldt',
      difficulty: 'Alta',
      duration: '6 horas',
      pointsOfInterest: ['Hotel Humboldt', 'Teleférico Warairarepano'],
      image: Humboldt,
    },
    {
      name: 'Quebrada de Chacaito',
      difficulty: 'Moderada',
      duration: '4 horas',
      pointsOfInterest: ['Cascada de Chacao', 'Mirador de Chacao'],
      image: QuebradaChacaito,
    },
    {
      name: 'Sabas Nieves',
      difficulty: 'Baja',
      duration: '2 horas',
      pointsOfInterest: ['Puesto de Guardaparques', 'Mirador Sabas Nieves'],
      image: Sabasnieves,
    },
    {
      name: 'Galipán',
      difficulty: 'Moderada',
      duration: '5 horas',
      pointsOfInterest: ['Pueblo de Galipán', 'Jardín Botánico'],
      image: Galipan,
    },
    {
      name: 'Pico Naiguatá',
      difficulty: 'Alta',
      duration: '8 horas',
      pointsOfInterest: ['Cima del Pico Naiguatá', 'Mirador del Caribe'],
      image: Naiguata,
    }
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
