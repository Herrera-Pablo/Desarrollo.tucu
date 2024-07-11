import React, { useEffect } from 'react';
import './featuressection.css';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
    useEffect(() => {
        // Removed image animation code
    }, []);

    return (
        <section id="features">
            <h2 className='bebas-neue-regular'>Nuestros Servicios</h2>
            <div className="features-content">
                <div className="feature-column">
                    <h3>Desarrollo y Entrega</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckCircle} className="fa-icon" /> <strong>Desarrollo Web Personalizado:</strong> Sitios web diseñados a medida.</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} className="fa-icon" /> <strong>Entrega Rápida:</strong> Sitios disponibles en 1 semana o hasta 10 días, dependiendo de las modificaciones requeridas.</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} className="fa-icon" /> <strong>Plantillas Disponibles:</strong> Elección de plantillas para una entrega más rápida.</li>
                    </ul>
                </div>
                <div className="feature-column">
                    <h3>Costos y Mantenimiento</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckCircle} className="fa-icon" /> <strong>Hosting Gratuito:</strong> Alojamientos sin costo adicional con Netlify.</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} className="fa-icon" /> <strong>Dominio Gratuito:</strong> Dominio con extensión .netlify.app incluido.</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} className="fa-icon" /> <strong>Pago Único Anual:</strong> Sin mensualidades por mantenimiento de dominio y hosting.</li>
                    </ul>
                </div>
                <div className="feature-column">
                    <h3>Funcionalidades Adicionales</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckCircle} className="fa-icon" /> <strong>Enlaces:</strong> A redes sociales u otros links del negocio/persona.</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} className="fa-icon" /> <strong>Formulario de Contacto:</strong> Formulario de contacto mediante Google Sheets, para revisarlo desde celular o pc.</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} className="fa-icon" /> <strong>SEO:</strong> Buen nivel de SEO, para una aparición orgánica en buscadores como Google, Yahoo, etc.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
