import React from 'react';
import '../styles/featuressection.css';

const FeaturesSection = () => {
    return (
        <section id="features">
            <h2>Nuestros Servicios</h2>
            <div className="features-content">
                <div className="feature-column">
                    <h3>Desarrollo y Entrega</h3>
                    <ul>
                        <li><strong>Desarrollo Web Personalizado:</strong> Sitios web diseñados a medida para satisfacer sus necesidades.</li>
                        <li><strong>Entrega Rápida:</strong> Sitios disponibles en 1 semana o hasta 10 días, dependiendo de las modificaciones requeridas.</li>
                        <li><strong>Plantillas Disponibles:</strong> Elección de plantillas para una entrega más rápida.</li>
                    </ul>
                </div>
                <div className="feature-column">
                    <h3>Costos y Mantenimiento</h3>
                    <ul>
                        <li><strong>Hosting Gratuito:</strong> Alojamientos sin costo adicional con Netlify.</li>
                        <li><strong>Dominio Gratuito:</strong> Dominio con extensión .netlify.app incluido.</li>
                        <li><strong>Pago Único Anual:</strong> Sin mensualidades por mantenimiento de dominio y hosting.</li>
                    </ul>
                </div>
                <div className="feature-column">
                    <h3>Funcionalidades Adicionales</h3>
                    <ul>
                        <li><strong>Redes Sociales:</strong> Enlaces a las redes sociales del negocio o persona.</li>
                        <li><strong>Formulario de Contacto:</strong> Formulario mediante Google Forms, con posibilidad de descargar los datos en Excel y trabajar de manera local u online.</li>
                        <li><strong>SEO Optimizado:</strong> Sitio web configurado para un SEO correcto y aparición orgánica en buscadores como Google.</li>
                    </ul>
                </div>
                <div className="contact-button">
                    <a href="#contact" data-anchor="contact">Contact</a>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
