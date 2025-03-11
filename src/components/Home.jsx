import React from 'react';

// Este componente es la pagina principal de proyecto
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bienvenido al Proyecto Ávila</h1>
      <p className="text-lg text-center mb-4">
        Promovemos actividades de esparcimiento y recreación en la naturaleza.
      </p>
      <p className="text-md text-center mb-4">
        Únete a nuestras excursiones y descubre la belleza del Parque Nacional El Ávila.
      </p>
      <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
        Explorar Excursiones
      </button>
    </div>
  );
};

export default Home;