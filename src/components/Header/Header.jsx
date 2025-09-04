import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

import logo from '../../assets/avatarPortfolio.ico';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}><img className={styles.logoimg} src={logo} alt="Logo" /></div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {['inicio', 'habilidades', 'proyectos', 'contacto'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`}
                  className={activeSection === item ? styles.active : ''}
                  onClick={() => handleNavClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;