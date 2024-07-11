const NavBar = () => {
    return (
        <nav>
            <a href="#home" data-anchor="home">Home</a>
            <a href="#features" data-anchor="features">Features</a>
            <a href="#cta" data-anchor="cta">CTA</a>
            <a href="#carousel" data-anchor="carousel">Carousel</a>
            <a href="#testimonials" data-anchor="testimonials">Testimonials</a>
            <a href="#cards1" data-anchor="cards1">Cards 1</a>
            <a href="#cards2" data-anchor="cards2">Cards 2</a>
            <a href="#about" data-anchor="about">About Us</a>
            <a href="#contact" data-anchor="contact">Contact</a>
            <div className="progress-bar"></div>
        </nav>
    );
};

export default NavBar;