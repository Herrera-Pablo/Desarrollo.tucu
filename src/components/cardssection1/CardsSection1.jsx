// components/CardsSection1.jsx
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './cardsSection1.css';
import pc1 from '../../assets/img/pc (1).jpg';
import pc2 from '../../assets/img/pc (2).jpg';
import pc3 from '../../assets/img/pc (3).jpg';
import Card1 from '../card1/Card1';
import ModalWithCarousel from '../modalwithcarousel/ModalWithCarousel';

const CardsSection1 = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const cardsData = [
        {
            imageUrl: pc1,
            title: "Web Tipo Landing",
            carouselData: [
                { image: pc1, text: "Perfecto para promociones y eventos. Este tipo de sitio está diseñado para captar la atención rápidamente y convertir visitantes en clientes potenciales." },
                { image: pc2, text: "Generalmente incluye una sola página focalizada en una oferta específica." },
                { image: pc3, text: "Con un diseño que incentiva a los usuarios a tomar una acción rápida." }
            ]
        },
        {
            imageUrl: pc2,
            title: "Web Corporativa",
            carouselData: [
                { image: pc2, text: "Ideal para empresas que buscan una presencia profesional en línea." },
                { image: pc1, text: "Este tipo de sitio web suele tener múltiples secciones organizadas, que incluyen información sobre la empresa, servicios, testimonios y contacto." },
                { image: pc3, text: "Está diseñado para transmitir confianza y establecer una imagen corporativa sólida." }
            ]
        },
        {
            imageUrl: pc3,
            title: "Web Tipo OnePage",
            carouselData: [
                { image: pc3, text: "Diseñado para aquellos que prefieren una navegación sencilla y directa." },
                { image: pc2, text: "Todo el contenido está concentrado en una sola página, lo que facilita la navegación del usuario sin tener que cargar múltiples páginas." },
                { image: pc1, text: "Es ideal para presentar productos o servicios de manera clara y concisa." }
            ]
        }
    ];

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCard(null);
    };

    return (
        <section id="cards-section1">
            <h2>¿Cuál es para vos?</h2>
            <Row xs={1} md={2} lg={3} className="g-4 cards">
                {cardsData.map((card, idx) => (
                    <Col key={idx} className="card-column" onClick={() => handleCardClick(card)}>
                        <Card1
                            imageUrl={card.imageUrl}
                            title={card.title}
                        />
                    </Col>
                ))}
            </Row>
            {selectedCard && (
                <ModalWithCarousel
                    show={showModal}
                    handleClose={handleCloseModal}
                    card={selectedCard}
                />
            )}
        </section>
    );
};

export default CardsSection1;
