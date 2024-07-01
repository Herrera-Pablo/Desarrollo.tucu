import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import '../styles/page1.css';

const Page1 = () => {
    return (
        <>
            <Header />
            <Hero />
            <AboutUs />
            <Footer />
        </>
    );
};

export default Page1;
