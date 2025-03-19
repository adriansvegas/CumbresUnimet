import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase'; // Import Firestore instance

const DestinationCard = ({ destination, onReservar }) => {
  return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Link to={`/info/${destination.id}`}>
              <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
              />
          </Link>
          <div className="p-4">
              <h2 className="text-xl font-semibold">{destination.name}</h2>
              <p>Dificultad: {destination.difficulty}</p>
              <p>Duración: {destination.duration}</p>
              <p>Puntos de interés: {destination.pointsOfInterest.join(', ')}</p>
              <Link to={`/info/${destination.id}`} className="info-button">Más información</Link>
              <button
                  onClick={onReservar}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
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

  useEffect(() => {
    const fetchDestinations = async () => {
      const destinationsCollection = collection(db, 'destinations'); // Adjust the collection name as needed
      const destinationSnapshot = await getDocs(destinationsCollection);
      const destinationList = destinationSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDestinations(destinationList);
    };

    fetchDestinations();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {destinations.map(destination => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default Destinations;
