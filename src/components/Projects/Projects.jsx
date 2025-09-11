import React, { useState } from 'react';
import styles from './Projects.module.css';

const Projects = ({ setActiveSection }) => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: "Aplicacion web para Telefonos",
      description: "Plataforma de informacion para coro, con informacion y letras de canciones.",
      tags: ["React", "CSS", "HTML", "JavaScript"],
      category: "frontend",
      linkDesplegado: "experienciacondios.pages.dev",
      linkCodigo: "https://github.com/rodri154321/experienciaconDios"
    },
    {
      id: 2,
      title: "Sistema de inscripcion personalizado a evento",
      description: "Sistema web que permite la inscripcion y manejo de la informacion de los participantes.",
      tags: ["React", "CSS", "HTML", "Node.js", "PostgreSQL", "Express", "Sequelize", "API"],
      category: "fullstack",
      linkDesplegado: "cima2025.pages.dev",
      linkCodigo: "https://github.com/rodri154321/Cima2025"
    },
    {
      id: 3,
      title: "Pagina informativa",
      description: "Pagina informativa de evento",
      tags: ["React", "CSS", "HTML"],
      category: "frontend",
      linkDesplegado: "cimaregionsur.com",
      linkCodigo: "https://github.com/rodri154321/Cima2026"
    },
    {
      id: 4,
      title: "Landing page de laboratorio odontologico",
      description: "landing page informativa de laboratorio odontologico, con formulario de contacto.",
      tags: ["React", "CSS", "HTML", "JavaScript", "EmailJS", "SweetAlert2", "Swiper"],
      category: "frontend",
      linkDesplegado: "",
      linkCodigo: ""
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'todos'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const handleClick1 = (url) => {
    const formattedUrl = url.startsWith('http') ? url : `https://${url}`;
    window.open(formattedUrl, '_blank');
  };

  return (
    <section id="proyectos" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Mis Proyectos</h2>

        <div className={styles.filters}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectOverlay}>

                  <button onClick={() => handleClick1(project.linkDesplegado)} className={styles.viewProjectBtn}>Ver Proyecto</button>

                  <button className={styles.viewCodeBtn}>Ver Código</button>

                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;