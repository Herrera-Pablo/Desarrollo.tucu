import React from 'react';
import '../styles/hero.css';
import logob from '../assets/logo/logob.png';

const Hero = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="hero-content container-fluid">
                <div className="left-content">
                <div className="text-box bebas-neue-regular animate__animated animate__slideInLeft">
    <h2 className="cta">Desarrollo Web</h2>
    <div className="animate__animated animate__rubberBand animate__delay-2s animate__repeat-1 animate__slow">
        <h2>Personalizado</h2>
    </div>
    <h3>Te ofrecemos tu propio sitio web de buena calidad, con un diseño pensado para ti, y sin necesidad de abonar cada mes.</h3>
</div>

                </div>
                <div className="right-content logo-container animated-up-down">
                    <h4 className='logo-text  animate__animated animate__zoomIn'>desarrollo.tucu</h4>
                </div>
            </div>
        </section>
    );
};

export default Hero;
