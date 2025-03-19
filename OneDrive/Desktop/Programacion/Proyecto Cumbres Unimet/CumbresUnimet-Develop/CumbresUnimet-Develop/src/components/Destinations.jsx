import React, { useState } from 'react';
import Booking from './Booking';
import Sabasnieves from '../assets/sabas-nieves.jpg';
import Humboldt from '../assets/hotel-humboldt.jpg';
import Cruzavila from '../assets/cruz-avila.jpg';
import QuebradaChacaito from '../assets/quebrada-chacaito.jpg';
import Galipan from '../assets/galipan.jpg';
import Naiguata from '../assets/naiguata.jpg';

const Destinations = () => {
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);

  const destinos = [
    { name: 'Ruta La Cruz del Avila', difficulty: 'Moderada', duration: '3 horas', pointsOfInterest: ['Mirador de la Guaira', 'Cascada de los Cuentos'], image: Cruzavila },
    { name: 'Ruta al Humboldt', difficulty: 'Alta', duration: '6 horas', pointsOfInterest: ['Hotel Humboldt', 'Teleférico Warairarepano'], image: Humboldt },
    { name: 'Quebrada de Chacaito', difficulty: 'Moderada', duration: '4 horas', pointsOfInterest: ['Cascada de Chacao', 'Mirador de Chacao'], image: QuebradaChacaito },
    { name: 'Sabas Nieves', difficulty: 'Baja', duration: '2 horas', pointsOfInterest: ['Puesto de Guardaparques', 'Mirador Sabas Nieves'], image: Sabasnieves },
    { name: 'Galipán', difficulty: 'Moderada', duration: '5 horas', pointsOfInterest: ['Pueblo de Galipán', 'Jardín Botánico'], image: Galipan },
    { name: 'Pico Naiguatá', difficulty: 'Alta', duration: '8 horas', pointsOfInterest: ['Cima del Pico Naiguatá', 'Mirador del Caribe'], image: Naiguata }
  ];

  const manejarClickReservar = (destino) => {
    setDestinoSeleccionado(destino);
  };

  const DestinationCard = ({ destination, onReservar }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
        <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{destination.name}</h2>
          <p className="text-gray-600 mb-1">Dificultad: {destination.difficulty}</p>
          <p className="text-gray-600 mb-1">Duración: {destination.duration}</p>
          <p className="text-gray-600 mb-3">Puntos de interés: {destination.pointsOfInterest.join(', ')}</p>
          <button
            onClick={onReservar}
            className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-200 cursor-pointer"
          >
            Reservar
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 min-h-screen pt-16"> {/* Añadido pt-16 */}
      {destinoSeleccionado ? (
        <Booking destination={destinoSeleccionado} />
      ) : (
        <div className="w-full max-w-6xl">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Destinos de Excursión</h1>
          <p className="text-lg text-center text-gray-600 italic mb-10">
            Promovemos actividades de esparcimiento y recreación en la naturaleza.
          </p>
          <p className="text-md text-center mb-8">
            Únete a nuestras excursiones y descubre la belleza del Parque Nacional El Ávila.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinos.map((destino, index) => (
              <DestinationCard key={index} destination={destino} onReservar={() => manejarClickReservar(destino)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;