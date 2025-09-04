import React, { useState } from 'react';
import styles from './Projects.module.css';

const Projects = ({ setActiveSection }) => {
  const [activeFilter, setActiveFilter] = useState('todos');
  
  const projects = [
    {
      id: 1,
      title: "E-commerce React",
      description: "Plataforma de comercio electrónico con carrito de compras, pasarela de pago y panel de administración.",
      tags: ["React", "Node.js", "PostgreSQL", "Redux"],
      category: "fullstack"
    },
    {
      id: 2,
      title: "App de Tareas",
      description: "Aplicación para gestión de tareas con funciones de colaboración en tiempo real.",
      tags: ["React", "Socket.io", "MongoDB", "JWT"],
      category: "fullstack"
    },
    {
      id: 3,
      title: "API RESTful",
      description: "API robusta para servicio de blogging con autenticación JWT y documentación completa.",
      tags: ["Node.js", "Express", "PostgreSQL", "Swagger"],
      category: "backend"
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description: "Panel de control con visualización de datos y métricas en tiempo real.",
      tags: ["React", "D3.js", "Chart.js", "API"],
      category: "frontend"
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
                  <button className={styles.viewProjectBtn}>Ver Proyecto</button>
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