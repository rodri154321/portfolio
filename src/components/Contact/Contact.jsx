import React, { useState } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = ({ setActiveSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await emailjs.sendForm('service_8ifzpdd', 'template_bjq8f6e', e.target, 'trN0FE9ZDcRDgctq7');
      alert('¡Gracias por tu mensaje! Te responderé pronto.');

    } catch (error) {
      alert('Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.');
      console.error('Error sending email:', error);
    }

    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contacto" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contacto</h2>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>¿Tienes un proyecto en mente?</h3>
            <p>
              Estoy siempre abierto a discutir nuevas oportunidades y proyectos interesantes. 
              No dudes en contactarme.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <i className="fas fa-envelope"></i>
                <span>rodri154321@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-phone"></i>
                <span>+54 351 7560897</span>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-map-marker-alt"></i>
                <span>Cordoba, Argentina 🇦🇷</span>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;