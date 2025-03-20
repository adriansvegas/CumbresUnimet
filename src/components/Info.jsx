import React from 'react';
// Este componente proporciona informacion básica
const Info = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Información sobre la Naturaleza</h1>
      <p className="mb-4">
        Aquí encontrarás consejos útiles para excursionistas, así como noticias sobre nuestras actividades.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Consejos para Excursionistas</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Siempre lleva suficiente agua y comida.</li>
        <li>Usa ropa adecuada para el clima.</li>
        <li>Informa a alguien sobre tu ruta y horario.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Últimas Noticias</h2>
      <p>No te pierdas nuestras próximas excursiones y eventos especiales. ¡Únete a nosotros!</p>
    </div>
  );
};

export default Info;