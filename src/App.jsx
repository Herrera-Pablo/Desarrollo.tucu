import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import Hero from '../src/components/hero/Hero';
import AboutUs from '../src/components/aboutus/AboutUs';
import CardsSection1 from '../src/components/cardssection1/CardsSection1';
import CardsSection2 from '../src/components/cardssection2/CardsSection2';
import Contact from '../src/components/contact/Contact';
import FeaturesSection from '../src/components/featuressection/FeaturesSection';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Page3 from './pages/page3/Page3';
import Page4 from './pages/page4/Page4';
import Page5 from './pages/page5/Page5';
import Error404 from './pages/error404/error404';
import 'animate.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
                    <Route path="*" element={<Error404 />} /> {/* Ruta comodín para 404 */}
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
