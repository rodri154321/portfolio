import React from 'react';
import styles from './Skills.module.css';

const Skills = ({ setActiveSection }) => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design", "..."],
      icon: "⚛️"
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "RESTful APIs", "Authentication","..."],
      icon: "🚀"
    },
    {
      category: "Bases de Datos",
      technologies: ["PostgreSQL", "MongoDB", "Diseño de Esquemas", "Optimización","..."],
      icon: "🗃️"
    },
    {
      category: "Herramientas",
      technologies: ["Git", "Docker", "Webpack", "Testing", "DevOps Básico","..."],
      icon: "🛠️"
    }
  ];

  return (
    <section id="habilidades" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Mis Habilidades</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h3 className={styles.skillTitle}>{skill.category}</h3>
              <ul className={styles.skillList}>
                {skill.technologies.map((tech, i) => (
                  <li key={i} className={styles.skillItem}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;