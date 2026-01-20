import projects from "../data/projects";

function ProjectList() {
  return (
    <div className="projects-card">
      <h3>Projects</h3>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item"
            onClick={() => window.open(project.link, "_blank")}
          >
            <img src={project.image} alt={project.title} />

            <div className="project-overlay">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;