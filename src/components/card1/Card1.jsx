// components/card1/Card1.jsx
import React from 'react';
import './card1.css';

const Card1 = ({ imageUrl, title }) => {
    return (
        <div className="card1">
            <img src={imageUrl} alt={title} className="card1-img" />
            <div className="card-content">
                <h3 className="card1-title">{title}</h3>
            </div>
        </div>
    );
};

export default Card1;
