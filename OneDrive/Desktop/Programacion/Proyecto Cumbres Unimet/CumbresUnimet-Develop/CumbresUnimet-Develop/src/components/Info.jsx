import React from 'react';

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 min-h-screen"> 
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Información sobre la Naturaleza
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center italic">
          Aquí encontrarás consejos útiles para excursionistas, así como noticias sobre nuestras actividades.
        </p>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Consejos para Excursionistas
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Siempre lleva suficiente agua y comida.</li>
            <li>Usa ropa adecuada para el clima.</li>
            <li>Informa a alguien sobre tu ruta y horario.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Últimas Noticias
          </h2>
          <p className="text-gray-600 leading-relaxed">
            No te pierdas nuestras próximas excursiones y eventos especiales. ¡Únete a nosotros!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Info;