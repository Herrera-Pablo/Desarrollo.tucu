import React from 'react';
import './aboutUs.css';
import diseño from '../../assets/img/diseño.png';

const AboutUs = () => {
    return (
        <section id="about-us" className="d-flex align-items-center">
            <div className="about-us-content container-fluid">
                <div className="about-text-container">
                    <h2 className="about-title animate__animated animate__fadeInUp">Quiénes Somos</h2>
                    <p className="about-description animate__animated animate__fadeInUp animate__delay-1s">
                        Apasionados por ayudar a pequeños comercios y emprendimientos a tener una presencia digital efectiva. 
                        Nos especializamos en crear soluciones simples, accesibles y funcionales que permiten a nuestros clientes destacarse en el mundo digital. 
                        Nos enfocamos en ofrecer un diseño limpio y atractivo, siempre priorizando la usabilidad y la experiencia del usuario, para que cada proyecto 
                        impulse el crecimiento de tu negocio.
                    </p>
                </div>
                <div className="about-image-container animate__animated animate__fadeInUp animate__delay-2s">
                    <img src={diseño} alt="About Us" className="about-image"/>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
