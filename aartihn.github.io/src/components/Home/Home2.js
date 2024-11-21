// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// function Home2() {
//   return (
//   );
// }
// export default Home2;

import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Publications from "../Publications/Publications";
import Resume from "../Resume/ResumeNew";

function Home2() {
  return (
    <div>
    <Container fluid className="home-about-section" id="home2">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I discovered my passion for programming early on, and I've been on an exciting journey of learning ever since! 🚀
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, Java, and JavaScript</b>
              </i>, with a special fondness for full-stack development.
              <br />
              <br />
              My interests lie in creating innovative&nbsp;
              <i>
                <b className="purple">Web Technologies and Scalable Applications.</b>
              </i> I thrive on building products that leverage the power of{" "}
                <i><b className="purple">
                Cloud Platforms
                </b>
              </i> and optimize performance.
              <br />
              <br />
              Whenever possible, I immerse myself in developing solutions with 
               <b className="purple"> Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>, ensuring my projects are not only functional but also user-friendly and efficient.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
      <section id="about">
      <Particle />
        <About />
      </section>
      <section id="projects">
      <Particle />
        <Projects />
      </section>
      <section id="publications">
        <Publications />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <Container fluid className="home-about-section">
        <Container>
      <Row>
          <Col md={12} className="home-about-social">
            <h1 className="purple">FIND ME ON</h1>
            <p>
              Feel free to connect with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aartihn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aarti-nemade/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home2;

