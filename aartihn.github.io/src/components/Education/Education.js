import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./EducationCard";
import Particle from "../Particle";

function Education() {
  return (
    <Container fluid className="project-edu-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          <b>Education</b>
        </h1>
        <h2 className="project-edu-heading">
          <strong className="purple">The Roots of My Learning Journey</strong>
        </h2>
        <Col style={{ justifyContent: "center", paddingBottom: "0px" }}>
          <Row md={4} className="project-edu-card">
            <ProjectCard
              title="Master of Science in Software Engineering"
              university="Arizona State University, AZ, USA"
              type = {true}
              gpa="4.0"
              range="4.0"
              duration="August 2024 - Present"
            />
          </Row>

          <Row md={4} className="project-edu-card">
            <ProjectCard
              title="Bachelor of Engineering (B.E) in Electronics & Telecommunication"
              university="Savitribai Phule Pune University, Pune, India"
              type = {true}
              gpa="6.35"
              range="10"
              duration="August 2015 – May 2019"
            />
          </Row>
        </Col>
      </Container>
    </Container>
  );
}

export default Education;
