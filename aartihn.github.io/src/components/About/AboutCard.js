import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I'm <span className="purple"><b>Aarti Nemade,</b> </span>
            currently pursuing a <span className="purple"><b>Master’s</b></span> in <span className="purple"><b>Software Engineering</b> </span> at <span className="purple"><b>Arizona State University</b> </span>. My journey in tech spans roles in <span className="purple"><b>web development, software engineering, and full-stack development,</b> </span> where I've embraced challenges like <span className="purple"><b>optimizing code performance</b></span> and <span className="purple"><b>refining user experiences</b></span>. With expertise in <span className="purple"><b>front-end technologies, cloud solutions, and scalable architecture,</b> </span> I’m passionate about developing impactful, <span className="purple"><b>user-focused software</b> </span>. I aim to further specialize in <span className="purple"><b>cloud-native design</b> </span> and aspire to <span className="purple"><b>mentor</b> </span> upcoming developers in innovative, high-impact projects.<br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "RGB(0, 102, 204)" }}>
            "Live, learn, and grow!"{" "}
          </p>
          <footer className="blockquote-footer">Aarti Nemade</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
