// components/TestimonialsSection.jsx
import React from 'react';
import '../styles/testimonialssection.css';
import Button from 'react-bootstrap/Button';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Cliente Satisfecho",
            feedback: "¡El servicio fue excelente y mi sitio web se entregó a tiempo!",
        },
        {
            name: "Usuario Feliz",
            feedback: "Muy profesionales y el hosting gratuito es una gran ventaja.",
        },
    ];

    return (
        <section id="testimonials">
            <h2>Testimonios</h2>
            <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <p>{testimonial.feedback}</p>
                        <h4>{testimonial.name}</h4>
                        <Button color="gradient"
                        >
                            hola mundo
                        </Button>
                        
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
