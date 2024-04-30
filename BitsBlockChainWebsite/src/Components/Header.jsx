import React, { useState, useEffect }from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import "../Css/Header.css";
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
    function handleChange(event) {
       
        window.location.href = event.target.value;
    }
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
                  <ul class='nav-menu'>
    <li><a href="#home" onClick={(e) => smoothScrollToTop(e)}>Home</a></li>
    <li><a href="#about-us" onClick={(e) => smoothScrollToSection(e, 'about-us')}>About Us</a></li>
    <li><a href="#info" onClick={(e) => smoothScrollToSection(e, 'info')}>Info</a></li>
    <li><a href="#our-team" onClick={(e) => smoothScrollToSection(e, 'our-team')}>Our Team</a></li>
    <li><a href="#contact-us" onClick={(e) => smoothScrollToSection(e, 'contact-us')}>Contact Us</a></li>
    <li><a href="https://bits-blockchain.notion.site/BITS-Blockchain-Development-Task-1-Frontend-cc11f0969ee84daa8c8df4b1eb780692">Resources</a></li>
    <li>
        <a>
        <select onChange={handleChange}>
            <option value="#">Earnings</option>
            <option value="https://superteam.fun/">SuperTeam</option>
            <option value="https://jobs.solana.com/jobs">Solana</option>
            <option value="https://polygon.technology/ecosystem-jobs">Polygon</option>
            <option value="https://web3.career/">Web3</option>
            <option value="https://code4rena.com">Bug Bounties</option>
        </select>
        </a>
    </li>
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
                        <li><a href="https://bits-blockchain.notion.site/BITS-Blockchain-Development-Task-1-Frontend-cc11f0969ee84daa8c8df4b1eb780692">Resources</a></li>
    <li>
        <a>
        <select onChange={handleChange}>
            <option value="#">Earnings</option>
            <option value="https://superteam.fun/">SuperTeam</option>
            <option value="https://jobs.solana.com/jobs">Solana</option>
            <option value="https://polygon.technology/ecosystem-jobs">Polygon</option>
            <option value="https://web3.career/">Web3</option>
            <option value="https://code4rena.com">Bug Bounties</option>
        </select>
        </a>
    </li>
                  </ul>
                </nav>
                )}
            </div>
            </div>
        </header>
    );
};

export default Header;
