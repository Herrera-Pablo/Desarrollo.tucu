import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
    return (
        <section id="about-us" className="d-flex align-items-center">
            <div className="about-us-content container-fluid">
                <div className="about-text-container">
                    <h2 className="about-title animate__animated animate__fadeInUp">Quiénes Somos</h2>
                    <p className="about-description animate__animated animate__fadeInUp animate__delay-1s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="about-image-container animate__animated animate__fadeInUp animate__delay-2s">
                    <img src="https://via.placeholder.com/400" alt="About Us" className="about-image"/>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
