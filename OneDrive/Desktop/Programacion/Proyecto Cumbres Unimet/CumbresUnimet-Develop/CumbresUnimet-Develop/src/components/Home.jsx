import React from 'react';
import { Link } from 'react-router-dom';
import Sabasnieves from '../assets/sabas-nieves.jpg';
import Humboldt from '../assets/hotel-humboldt.jpg';
import Cruzavila from '../assets/cruz-avila.jpg';

const Home = () => {
  const rutasPopulares = [
    { name: 'Sabas Nieves', image: Sabasnieves, link: '/destinations#sabas-nieves' },
    { name: 'Ruta al Humboldt', image: Humboldt, link: '/destinations#humboldt' },
    { name: 'Ruta La Cruz del Avila', image: Cruzavila, link: '/destinations#cruz-avila' },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <img
        src="/src/assets/avila.jpg"
        alt="Avila"
        className="w-full h-[290px] object-cover shadow-lg mb-6"
      />
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Bienvenido al Proyecto Ávila</h1>
      <p className="text-lg text-center text-gray-600 italic mb-10">
        "La naturaleza no juzga, solo acoge. En cada caminata, te sientes libre de ser quien realmente eres".
      </p>
      <div className="flex w-full max-w-5xl bg-white shadow-md rounded-lg p-6 space-y-8">
        <div className="w-full flex flex-col items-center">
          <section className="border-2 border-gray-300 rounded-lg p-6 w-full bg-gray-100">
            <h2 className="text-3xl font-bold text-gray-700 mb-4 text-center">¿Quiénes Somos?</h2>
            <img
              src="/src/assets/logo1.jpg"
              alt="Avila"
              className="w-32 h-auto rounded-full mx-auto mb-4 shadow-md"
            />
            <p className="text-gray-600 text-justify leading-relaxed">
              Somos un grupo de apasionados de la montaña que hemos dedicado años a explorar los senderos del Ávila.
              Nuestra conexión con la naturaleza y nuestro profundo conocimiento del parque nos impulsaron a crear esta
              plataforma, donde compartimos nuestra experiencia con otros amantes del senderismo.
            </p>
          </section>

          <div className="flex flex-col w-full gap-4 mt-8">
            <section className="border-2 border-gray-300 rounded-lg p-6 w-full bg-gray-100">
              <h2 className="text-3xl font-bold text-gray-700 mb-4 text-center">Objetivo</h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                Ser la plataforma líder en la promoción de actividades al aire libre para la comunidad universitaria,
                inspirando a los estudiantes a descubrir, preservar y disfrutar de los paisajes naturales de Venezuela.
                Buscamos consolidarnos como un referente en la organización de excursiones estudiantiles, integrando
                tecnología y sostenibilidad para ofrecer experiencias únicas y accesibles.
              </p>
            </section>

            <section className="border-2 border-gray-300 rounded-lg p-6 w-full bg-gray-100">
              <h2 className="text-3xl font-bold text-gray-700 mb-4 text-center">Misión</h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                Fomentar la conexión entre los alumnos de la unimet y la naturaleza a través de excursiones organizadas
                en el Parque Nacional El Ávila. Nuestra plataforma proporciona información detallada, facilita la reserva
                de rutas y promueve una comunidad de amantes del senderismo, garantizando experiencias seguras y
                enriquecedoras en contacto con el medio ambiente.
              </p>
            </section>

            <section className="border-2 border-gray-300 rounded-lg p-6 w-full bg-gray-100">
              <h2 className="text-3xl font-bold text-gray-700 mb-4 text-center">Visión</h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                Ser la plataforma líder en la promoción de actividades al aire libre para la comunidad universitaria,
                inspirando a los estudiantes a descubrir, preservar y disfrutar de los paisajes naturales de Venezuela.
                Buscamos consolidarnos como un referente en la organización de excursiones estudiantiles, integrando
                tecnología y sostenibilidad para ofrecer experiencias únicas y accesibles.
              </p>
            </section>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-12 text-center">Nuestras Rutas más Populares</h2> {/* Cambiado a mb-12 */}
            <div className="flex justify-center gap-4 mt-8">
              {rutasPopulares.map((ruta, index) => (
                <Link key={index} to={ruta.link} className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-80">
                  <img src={ruta.image} alt={ruta.name} className="w-full h-32 object-cover" />
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold text-gray-800">{ruta.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 mt-8">
            <Link to="/destinations" className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 cursor-pointer shadow-md transition duration-300">
              Ver Todas Nuestras Rutas
            </Link>
            <Link to="/login" className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 cursor-pointer shadow-md transition duration-300">
              ¡Únete a Nuestra Comunidad!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;