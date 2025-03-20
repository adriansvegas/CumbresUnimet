import React from 'react';

// Este componente es la pagina principal de proyecto
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <img src="/src/assets/avila.jpg" alt="Avila" className="w-full h-[290px] object-cover" />
      <h1 className="text-4xl font-bold mb-4">Bienvenido al Proyecto Ávila</h1>
      <p className="text-lg text-center mb-4">
      "La naturaleza no juzga, solo acoge. En cada caminata, te sientes libre de ser quien realmente eres".
      </p>
      <div className='flex flex-col items-start justify-start bg-gray-100 p-4'>
      <section className="border-4 border-gray-500 rounded-lg p-4 mb-8 w-full max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-2">¿Quiénes Somos?</h2>
        <img src="/src/assets/logo1.jpg" alt="Avila" className="w-2/4 h-auto rounded-lg ml-25"></img>

        <p className="text-center">
          Somos un grupo de apasionados de la montaña que hemos dedicado años a explorar los senderos del Ávila. 
          Nuestra conexión con la naturaleza y nuestro profundo conocimiento del parque nos impulsaron a crear esta 
          plataforma, donde compartimos nuestra experiencia con otros amantes del senderismo.
        </p>

      </section>

 
      <section className="border-4 border-gray-500 rounded-lg p-4 mb-8 w-full max-w-md mx-auto">
        <h2 className="text-3xl font-bold">Objetivo</h2>
        <p>Ser la plataforma líder en la promoción de actividades al aire libre para la comunidad universitaria, inspirando a los estudiantes a descubrir, preservar y disfrutar de los paisajes naturales de Venezuela. Buscamos consolidarnos como un referente en la organización de excursiones estudiantiles, integrando tecnología y sostenibilidad para ofrecer experiencias únicas y accesibles.</p>
      </section>
      <section className="border-4 border-gray-500 rounded-lg p-4 mb-8 w-full max-w-md mx-auto">
        <h2 className="text-3xl font-bold">Misión</h2>
        <p>Fomentar la conexión entre los alumnos de la unimet y la naturaleza a través de excursiones organizadas en el Parque Nacional El Ávila. Nuestra plataforma proporciona información detallada, facilita la reserva de rutas y promueve una comunidad de amantes del senderismo, garantizando experiencias seguras y enriquecedoras en contacto con el medio ambiente.</p>
      </section>
      <section className="border-4 border-gray-500 rounded-lg p-4 mb-8 w-full max-w-md mx-auto">
        <h2 className="text-3xl font-bold">Visión</h2>
        <p>Ser la plataforma líder en la promoción de actividades al aire libre para la comunidad universitaria, inspirando a los estudiantes a descubrir, preservar y disfrutar de los paisajes naturales de Venezuela. Buscamos consolidarnos como un referente en la organización de excursiones estudiantiles, integrando tecnología y sostenibilidad para ofrecer experiencias únicas y accesibles.</p>
      </section>
      <div className="flex flex-col items-center justify-center mb-8">
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200 mb-4">
          Conoce Nuestras Rutas
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          ¡Únete a Nuestra Comunidad!
        </button>
      </div>
      </div>
 
      </div>  
  ); 
};

export default Home;