
import "./SkillSection.css"
import { SKILLS } from "./data"

const SkillSection = () => {
  return (
    <section className='skills' id="Skills">
      <header className='Skills1'>
        My Skills
      </header>
      <main className='Skills2'>
      <article className="skill-cont">
          {SKILLS.map(({ name, skill }, i) => (
            <div className="skill" key={i}>
              <div className="progress-bar">
                <div className="bar" style={{ height: `${skill}%` }} />
              </div>
              <span>{name}</span>
            </div>
          ))}
        </article>
      </main>
    </section>
  )
}

export default SkillSection