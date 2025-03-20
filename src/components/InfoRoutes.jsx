import React from 'react';
import { useParams } from 'react-router-dom';
import './InfoRoutes.css'; // Assuming a CSS file for styling

const InfoRoutes = () => {
    const { routeId } = useParams(); // Get the route ID from the URL
    // Sample data for demonstration; this should be replaced with actual data fetching logic
    const routeInfo = {
        name: "Excursión a Ávila",
        description: "Una emocionante excursión a la hermosa ciudad de Ávila.",
        difficulty: "Moderada",
        duration: "4 horas",
        pointsOfInterest: ["Murallas de Ávila", "Catedral de Ávila", "Plaza del Mercado"],
        image: "avila.jpg" // Replace with actual image path
    };

    return (
        <div className="info-routes-container">
            <h1 className="route-title">{routeInfo.name}</h1>
            <img src= {"src/assets/" + routeInfo.image} alt={routeInfo.name} className="route-image" />
            <p className="route-description">{routeInfo.description}</p>
            <p><strong>Dificultad:</strong> {routeInfo.difficulty}</p>
            <p><strong>Duración:</strong> {routeInfo.duration}</p>
            <p><strong>Puntos de interés:</strong> {routeInfo.pointsOfInterest.join(', ')}</p>
            <button className="reserve-button">Reservar</button>
        </div>
    );
};

export default InfoRoutes;
