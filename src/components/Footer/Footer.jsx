import React from 'react';
import styles from './Footer.module.css';

import { FaGithub,FaLinkedin,FaWhatsapp,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h3>Rodrigo Amaya</h3>
            <p>Desarrollador Full Stack especializado en React, Node.js y PostgreSQL</p>
          </div>
          
          <div className={styles.footerLinks}>
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#habilidades">Habilidades</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSocial}>
            <h4>Sígueme</h4>
            <div className={styles.socialLinks}>
              <a href="https://github.com/rodri154321" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rodrigo-amaya-9a04161b5/" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              {/* <a href="#" aria-label="Whatsapp">
                <FaWhatsapp />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a> */}
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Rodrigo Amaya. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;