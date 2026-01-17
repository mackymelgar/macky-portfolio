import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((project) => (
        <div className="project" key={project.id}>
          <div className="project-image">
            <img src={project.image} alt={`${project.title} Screenshot`} />
          </div>

          <div className="project-content">
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>

            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <div className="links">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : (
                <span>GitHub: Coming soon</span>
              )}

              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              ) : (
                <span>Live Demo: Coming soon</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
