// components/CardsSection1.jsx
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/cardsSection1.css';
import pc1 from '../assets/img/pc (1).jpg';
import pc2 from '../assets/img/pc (2).jpg';
import pc3 from '../assets/img/pc (3).jpg';
import Card1 from './Card1'; // Importa el componente Card1

const CardsSection1 = () => {
    const cardsData = [
        {
            imageUrl: pc1,
            title: "Web Tipo Landing",
            description: "Perfecto para promociones y eventos. Este tipo de sitio está diseñado para captar la atención rápidamente y convertir visitantes en clientes potenciales. Generalmente incluye una sola página focalizada en una oferta específica, con un diseño que incentiva a los usuarios a tomar una acción rápida."
        },
        {
            imageUrl: pc2,
            title: "Web Corporativa",
            description: "Ideal para empresas que buscan una presencia profesional en línea. Este tipo de sitio web suele tener múltiples secciones organizadas, que incluyen información sobre la empresa, servicios, testimonios y contacto. Está diseñado para transmitir confianza y establecer una imagen corporativa sólida."
        },
        {
            imageUrl: pc3,
            title: "Web Tipo OnePage",
            description: "Diseñado para aquellos que prefieren una navegación sencilla y directa. Todo el contenido está concentrado en una sola página, lo que facilita la navegación del usuario sin tener que cargar múltiples páginas. Es ideal para presentar productos o servicios de manera clara y concisa."
        }
    ];

    return (
        <section id="cards-section1">
            <h2>¿Cuál es para vos?</h2>
            <Row xs={1} md={2} lg={3} className="g-4 cards">
                {cardsData.map((card, idx) => (
                    <Col key={idx}>
                        <Card1
                            imageUrl={card.imageUrl}
                            title={card.title}
                            description={card.description}
                        />
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default CardsSection1;
