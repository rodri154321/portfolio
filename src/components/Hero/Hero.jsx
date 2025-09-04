import React from 'react';
import styles from './Hero.module.css';
import PerfilImage from '../../assets/profilePhoto.jpg';

const Hero = ({ setActiveSection }) => {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <img className={styles.photoProfile} src={PerfilImage} alt="" />
        <h1>Rodrigo Amaya</h1>
        <h1 className={styles.title}>
          Desarrollador <span className={styles.highlight}>Full Stack</span>
        </h1>
        <p className={styles.description}>
          Creo experiencias web excepcionales con React, Node.js y PostgreSQL, 
          siempre explorando nuevas tecnologías y desafíos.
        </p>
        <div className={styles.buttons}>
          <button 
            className={styles.primaryBtn}
            onClick={() => setActiveSection('proyectos')}
          >
            Ver mis proyectos
          </button>
          <button 
            className={styles.secondaryBtn}
            onClick={() => setActiveSection('contacto')}
          >
            Contactarme
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;