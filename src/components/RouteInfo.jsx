import React from 'react';
import { useParams } from 'react-router-dom';

const RouteInfo = () => {
    const { routeId } = useParams(); // Get the route ID from the URL

    // Sample data for demonstration; this should be replaced with actual data fetching logic
    const routeData = {
        1: {
            name: "Ruta La Cruz del Avila",
            description: "Una emocionante excursión a la hermosa Ruta La Cruz del Avila.",
            details: "Detalles sobre la ruta, incluyendo puntos de interés y recomendaciones.",
        },
        2: {
            name: "Ruta al Humboldt",
            description: "Explora la majestuosa Ruta al Humboldt.",
            details: "Detalles sobre la ruta, incluyendo puntos de interés y recomendaciones.",
        },
        // Add more routes as needed
    };

    const routeInfo = routeData[routeId] || { name: "Ruta no encontrada", description: "", details: "" };

    return (
        <div className="p-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">{routeInfo.name}</h1>
            <p className="mb-4">{routeInfo.description}</p>
            <p>{routeInfo.details}</p>
        </div>
    );
};

export default RouteInfo;
