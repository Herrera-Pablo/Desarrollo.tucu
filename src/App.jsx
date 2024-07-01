import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CarouselSection from './components/CarouselSection';
import CardsSection1 from './components/CardsSection1';
import CardsSection2 from './components/CardsSection2';
import Contact from './components/Contact';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import 'animate.css';

const App = () => {
    return (
        <Router>
            <div className="container-links-app">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />
                    <Route path="/page5" element={<Page5 />} />
                </Routes>
            </div>
        </Router>
    );
};

const HomePage = () => {
    return (
        <div className="container-section-app">
            <section id="header">
                <Header />
            </section>
            <section id="home">
                <Hero />
            </section>
            <section id="features">
                <FeaturesSection />
            </section>
            <section id="cta">
                <CTASection />
            </section>
            <section id="carousel">
                <CarouselSection />
            </section>
            <section id="testimonials">
                <TestimonialsSection />
            </section>
            <section id="cards1">
                <CardsSection1 />
            </section>
            <section id="cards2">
                <CardsSection2 />
            </section>
            <section id="about">
                <AboutUs />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </div>
    );
};

export default App;
