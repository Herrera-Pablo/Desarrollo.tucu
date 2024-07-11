import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import AboutUs from '../../components/aboutus/AboutUs';
import CardsSection1 from '../../components/cardssection1/CardsSection1';
import CardsSection2 from '../../components/cardssection2/CardsSection2';
import Contact from '../../components/contact/Contact';
import FeaturesSection from '../../components/featuressection/FeaturesSection';

import '../../pages/page4/page4.css';

const Page4 = () => {
    return (
        <>
            <Header />
            <Hero />
            <CardsSection1 />
            <Contact />
            <Footer />
        </>
    );
};

export default Page4;
