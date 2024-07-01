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
            description: "Perfecto para promociones y eventos. Obtén una página que convierta visitantes en clientes."
        },
        {
            imageUrl: pc2,
            title: "Web Corporativa",
            description: "Ideal para empresas que buscan una presencia profesional en línea con múltiples secciones y servicios."
        },
        {
            imageUrl: pc3,
            title: "Web Tipo OnePage",
            description: "Para aquellos que prefieren todo en una sola página. Fácil de navegar y directa al punto."
        }
    ];

    return (
        <section id="cards-section1">
            <h2>¿Cual necesitas?</h2>
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
