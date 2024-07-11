import React from 'react';
import { Link } from 'react-router-dom';
import './error404.css'; // Asegúrate de tener estilos adecuados

const Error404 = () => {
    return (
        <div className="error404-container">
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>Lo sentimos, pero la página que buscas no existe.</p>
            <Link to="/" className="go-home-button">Ir a la página principal</Link>
        </div>
    );
};

export default Error404;
