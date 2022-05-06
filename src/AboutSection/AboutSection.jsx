import "./AboutSection.css"
import Me from "./Assets/me.png"
import { Container, Col, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const AboutSection = () => {
  return (
    <section className="About" id="About">
        <header className="About1">
            <div className="div1">
                About Me
            </div>
        </header>
        <main className="About2">
            <Container>
                <Row>
                    <Col>
                    <div className="Img"><img src={Me} alt="" srcset="" /></div>
                    </Col>
                    <Col>
                    <div className="intro">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Assumenda accusantium sequi ex unde 
                        quam totam! Odit tempora odio voluptatem! Repudiandae, 
                        libero ducimus! Libero vitae optio excepturi ullam tempore impedit aliquam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi nobis neque consectetur officiis architecto dolore? Praesentium omnis ad quo possimus officia. .
                    </div>
                    </Col>
                </Row>
            </Container>
        </main>
    </section>
  )
}

export default AboutSection