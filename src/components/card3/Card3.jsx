// components/Card3.jsx
import React from 'react';
import './card3.css';

const Card3 = ({ title, content }) => {
    return (
        <div className="card3">
            <div className="card-content">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Card3;
