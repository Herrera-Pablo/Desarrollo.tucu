import React, { useEffect } from 'react';
import '../styles/featuressection.css';
import 'animate.css';
import fastImage from '../assets/img/fast.png';
import paymentImage from '../assets/img/payment.png';
import redesImage from '../assets/img/redes.png';

const FeaturesSection = () => {
    useEffect(() => {
        const images = document.querySelectorAll('.feature-image');
        let currentIndex = 0;

        const startAnimation = (index) => {
            images[index].style.animationPlayState = 'running';
            setTimeout(() => {
                images[index].style.animationPlayState = 'paused';
                currentIndex = (index + 1) % images.length;
                setTimeout(() => startAnimation(currentIndex), 500); // 0.5 segundo de retraso
            }, 3000); // Duración de la animación (3 segundos)
        };

        startAnimation(currentIndex);
    }, []);

    return (
        <section id="features">
            <h2>Nuestros Servicios</h2>
            <div className="features-content">
                <div className="feature-column">
                    <h3>Desarrollo y Entrega</h3>
                    <ul>
                        <li><strong>Desarrollo Web Personalizado:</strong> Sitios web diseñados a medida.</li>
                        <li><strong>Entrega Rápida:</strong> Sitios disponibles en 1 semana o hasta 10 días, dependiendo de las modificaciones requeridas.</li>
                        <li><strong>Plantillas Disponibles:</strong> Elección de plantillas para una entrega más rápida.</li>
                    </ul>
                    <img src={fastImage} alt="Desarrollo y Entrega" className="feature-image animate__animated animate__headShake" />
                </div>
                <div className="feature-column">
                    <h3>Costos y Mantenimiento</h3>
                    <ul>
                        <li><strong>Hosting Gratuito:</strong> Alojamientos sin costo adicional con Netlify.</li>
                        <li><strong>Dominio Gratuito:</strong> Dominio con extensión .netlify.app incluido.</li>
                        <li><strong>Pago Único Anual:</strong> Sin mensualidades por mantenimiento de dominio y hosting.</li>
                    </ul>
                    <img src={paymentImage} alt="Costos y Mantenimiento" className="feature-image animate__animated animate__headShake" />
                </div>
                <div className="feature-column">
                    <h3>Funcionalidades Adicionales</h3>
                    <ul>
                        <li><strong>Enlaces:</strong> A redes sociales u otros links del negocio/persona.</li>
                        <li><strong>Formulario de Contacto:</strong> Formulario de contacto mediante Google Sheets, para revisarlo desde celular o pc.</li>
                        <li><strong>SEO:</strong> Buen nivel de SEO, para una aparición orgánica en buscadores como Google, Yahoo, etc.</li>
                    </ul>
                    <img src={redesImage} alt="Funcionalidades Adicionales" className="feature-image animate__animated animate__headShake" />
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
