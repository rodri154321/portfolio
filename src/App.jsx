import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <div className={styles.app}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <Contact setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
}

export default App;