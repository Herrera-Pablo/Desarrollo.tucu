// components/Card2.jsx
import React from 'react';
import './card2.css';

const Card2 = ({ imageUrl, title, buttonText }) => {
    return (
        <div className="card2">
            <img src={imageUrl} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <button>{buttonText}</button>
            </div>
        </div>
    );
};

export default Card2;
