import React from 'react';

const Navbar = () => {
    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                alert(`You have reached the ${sectionId.replace('-', ' ')} section!`);
            }, 500);
        }
    };

    return (
        <nav>
            <a href="#home" className="logo"><img src="logo.png" alt="Logo" /></a>
            <ul className="menu">
                <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
                <li><a href="#hobbies" onClick={(e) => scrollToSection(e, 'hobbies')}>Hobbies</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact Us</a></li>
            </ul>
            <a href="#" className="lang">En</a>
        </nav>
    );
};

export default Navbar;