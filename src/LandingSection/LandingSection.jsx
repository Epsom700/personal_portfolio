import "./LandingSection.css"
import Landing from "./assets/LandingSection.jpg"
import { Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

const LandingSection = () => {
  return (

    <section id="Landing" style={{backgroundImage:  `url(${Landing})`, height: `100vh`}}>
      <header className="navbar">
          <nav>
            <ul className="nav-links">
              <li className="nav-link">
                <a data-scroll href="#Landing">
                  Home
                </a>
              </li>
              <li data-scroll className="nav-link">
                <a href="#About">About</a>
              </li>
              <li className="nav-link">
                <a data-scroll href="#Skills">
                  Skills
                </a>
              </li>
              <li className="nav-link">
                <a data-scroll href="#Projects">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
      </header>
      <main id="div2">
      <Container>
        <Row>
          <Col>
            <div id="intro">
              <div className="intro1">Hi, I am</div>
              <div className="intro2">Arjun Singh</div>
              <div className="intro1">and I am a, <span id="profession"></span></div>
            </div>
          </Col>
        </Row>
      </Container>
      </main>
    </section>
  )
}

export default LandingSection