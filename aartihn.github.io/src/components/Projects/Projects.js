import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import xseller from "../../Assets/Projects/xseller.jpeg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatx from "../../Assets/Projects/chatx.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import rpms from "../../Assets/Projects/rpms.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatx}
              isBlog={false}
              title="ChatX"
              description="ChatX is a real-time, web-based chat application built using Flask and Socket.IO. It allows users to join a chat room with a username and chat with others instantly in a simple, user-friendly interface."
              ghLink="https://github.com/Akash-Agarwal-X/ChatX.git"
              // demoLink="https://chatify-49.web.app/"
              />
          </Col>

               <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rpms}
              isBlog={false}
              title="Research Paper Management System"
              description="This project is a Research Paper Management System built using Java. It provides a graphical user interface (GUI) for adding, viewing, and deleting research papers. The data is managed using in-memory storage with collections (e.g., ArrayList)."
              ghLink="https://github.com/Akash-Agarwal-X/Research-Paper-Management-System.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xseller}
              isBlog={false}
              title="X-Seller"
              description="XSeller is an online platform where users can buy and sell second-hand items. The platform allows users to view products, register an account, log in, and add products to their shop for selling."
              ghLink="https://github.com/Akash-Agarwal-X/X-Seller.git"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
            </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
