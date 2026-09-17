import { projects } from '../content'

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">Live demo</a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">Source</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
