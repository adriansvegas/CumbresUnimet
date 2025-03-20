import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase'; // Import Firestore instance
import Booking from './Booking'; // Import the Booking component

const DestinationCard = ({ destination, onReservar }) => {
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);
  return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Link to={`/info/${destination.id}`}>
              <img
                  src={"src/assets/" + destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
              />
          </Link>
          <div className="p-4">
              <h2 className="text-xl font-semibold">{destination.name}</h2>
              <p>Dificultad: {destination.difficulty}</p>
              <p>Duración: {destination.duration}</p>
              <p>Puntos de interés: {Array.isArray(destination.pointsOfInterest) ? destination.pointsOfInterest.join(', ') : 'No points of interest available'}</p>
              <Link to={`/info/${destination.id}`} className="info-button">Más información</Link>
              <button
                  onClick={onReservar}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mr-1 ml-1"
              >
                  Reservar
              </button>
              <Link to={`/route-info/${destination.id}`} className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
                  Acceder a Información
              </Link>
          </div>
      </div>
  );
};

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      const destinationsCollection = collection(db, 'destinations'); // Adjust the collection name as needed
      const destinationSnapshot = await getDocs(destinationsCollection);
      const destinationList = destinationSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDestinations(destinationList);
    };

    fetchDestinations();
  }, []);

  const manejarClickReservar = (destino) => {
    console.log(destino);
    setDestinoSeleccionado(destino);
  };

  return (
    <div className="p-8 bg-gray-100">
      {destinoSeleccionado ? (
        <Booking destination={destinoSeleccionado} />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Destinos de Excursión</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {destinations.map((destino, index) => (
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
