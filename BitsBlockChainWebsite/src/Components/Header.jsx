import React, { useState, useEffect }from 'react';
import logo from '/images/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Header.css';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
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
            <div className="menu-open">
                <div className="header-container">
            <div className="logo-container">
                <img src="/images/logo.png" alt="Logo" className="logo" />
            </div>
            {(windowWidth >= 768) && (
                <nav>
                  <ul className='nav-menu'>
                  <li><a href="#home" onClick={(e)=>smoothScrollToTop(e)}>Home</a></li>
                        <li><a href="#about-us" onClick={(e) => smoothScrollToSection(e, 'about-us')}>About Us</a></li>
                        <li><a href="#info"  onClick={(e) => smoothScrollToSection(e, 'info')}>Info</a></li>
                        <li><a href="#our-team" onClick={(e) => smoothScrollToSection(e, 'our-team')}>Our Team</a></li>
                        <li><a href="#contact-us"  onClick={(e) => smoothScrollToSection(e, 'contact-us')}>Contact Us</a></li>
                        
                  </ul>
                </nav>
            )}
 {windowWidth < 768 && (
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                )}
            </div>
            <div className='header-container-2'>
                {(windowWidth < 768 && menuOpen) && (
            <nav>
                  <ul className='nav-menu-open'>
                  <li><a href="#home" onClick={(e)=>smoothScrollToTop(e)}>Home</a></li>
                        <li><a href="#about-us" onClick={(e) => smoothScrollToSection(e, 'about-us')}>About Us</a></li>
                        <li><a href="#info"  onClick={(e) => smoothScrollToSection(e, 'info')}>Info</a></li>
                        <li><a href="#our-team" onClick={(e) => smoothScrollToSection(e, 'our-team')}>Our Team</a></li>
                        <li><a href="#contact-us"  onClick={(e) => smoothScrollToSection(e, 'contact-us')}>Contact Us</a></li>
                        
                  </ul>
                </nav>
                )}
            </div>
            </div>
        </header>
    );
};

export default Header;
