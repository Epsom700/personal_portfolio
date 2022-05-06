import "./ProjectSection.css"
import {PROJECTS}  from "./data.js"

const ProjectSection = () => {
  return (
    <section className='Project' id="Projects">
        <header className='Project1'>
            What have I done...?
        </header>
        <main className="Project2">
        <article className="proj-cont">
          {PROJECTS.map((project, i) => (
            <a
              target="_blank"
              rel="noreferrer nooopener"
              href={project.link}
              className="proj"
              key={i}
            
            >
              <img src={project.imge} alt="Project Screenshot" className="proj-img" />
              <h3 className="proj-heading">{project.title}</h3>
              <p className="proj-desc">{project.desc}</p>
            </a>
          ))}
        </article>
        </main>
    </section>
  )
}

export default ProjectSection