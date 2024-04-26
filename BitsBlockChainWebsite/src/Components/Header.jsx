import React from 'react';
import logo from '/images/logo.png';
import './Header.css';
const Header = () => {
    const smoothScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const smoothScrollToSection = (e, sectionId) => {
        e.preventDefault();
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <div className="header-container">
               
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>

                
                <nav>
                <ul className="nav-menu">
                        <li><a href="#home" onClick={(e)=>smoothScrollToTop(e)}>Home</a></li>
                        <li><a href="#about-us" onClick={(e) => smoothScrollToSection(e, 'about-us')}>About Us</a></li>
                        <li><a href="#info"  onClick={(e) => smoothScrollToSection(e, 'info')}>Info</a></li>
                        <li><a href="#our-team" onClick={(e) => smoothScrollToSection(e, 'our-team')}>Our Team</a></li>
                        <li><a href="#contact-us"  onClick={(e) => smoothScrollToSection(e, 'contact-us')}>Contact Us</a></li>
                        </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
