import React from 'react';

// Este componente es la pagina principal de proyecto
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <img src="/src/assets/avila.jpg" alt="Avila" className="w-full h-[290px] object-cover" />
      <h1 className="text-4xl font-bold mb-4">Bienvenido al Proyecto Ávila</h1>
      <p className="text-lg text-center mb-4">
        Promovemos actividades de esparcimiento y recreación en la naturaleza.
      </p>
      <p className="text-md text-center mb-8">
        Únete a nuestras excursiones y descubre la belleza del Parque Nacional El Ávila.
      </p>
      <section className="text-center mb-8">
        <h2 className="text-2xl font-bold">¿Quiénes Somos?</h2>
        <p>Información sobre el proyecto y su equipo.</p>
      </section>
      <section className="text-center mb-8">
        <h2 className="text-2xl font-bold">Objetivo</h2>
        <p>Descripción de los objetivos del proyecto.</p>
      </section>
      <section className="text-center mb-8">
        <h2 className="text-2xl font-bold">Misión</h2>
        <p>Declaración de la misión del proyecto.</p>
      </section>
      <section className="text-center mb-8">
        <h2 className="text-2xl font-bold">Visión</h2>
        <p>Descripción de la visión del proyecto.</p>
      </section>
      <div className="flex flex-col items-center mb-8">
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200 mb-4">
          Conoce Nuestras Rutas
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          ¡Únete a Nuestra Comunidad!
        </button>
      </div>
    </div>

    

    
  ); 
};

export default Home;