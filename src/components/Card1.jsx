// components/Card1.jsx
import React from 'react';
import '../styles/card1.css';

const Card1 = ({ imageUrl, title, description }) => {
    return (
        <div className="card1">
            
            <img src={imageUrl} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card1;
