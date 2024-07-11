// components/ModalWithCarousel.jsx
import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';

const ModalWithCarousel = ({ show, handleClose, card }) => {
    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{card.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel>
                    {card.carouselData.map((item, idx) => (
                        <Carousel.Item key={idx}>
                            <img
                                className="d-block w-100"
                                src={item.image}
                                alt={`Slide ${idx}`}
                            />
                            <Carousel.Caption>
                                <p>{item.text}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Modal.Body>
        </Modal>
    );
};

export default ModalWithCarousel;
