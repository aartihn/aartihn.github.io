import React from "react";
import Card from "react-bootstrap/Card";
import Particle from "../Particle";

function EducationCard(props) {
  return (
    <Card className="project-edu-card-view">
      <Particle />
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Card.Title className="purple" style={{ textAlign: "left" }}><b>{props.title}</b></Card.Title>
        <Card.Text style={{ textAlign: "right" }}><b><i>{props.duration}</i></b></Card.Text>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Card.Text style={{ textAlign: "left" }}>
          <b>{props.university}</b>
        </Card.Text>
        <Card.Text style={{ textAlign: "right" }}><b>{props.type ? "GPA" : "Percentage"}: {props.gpa}/{props.range}</b></Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
export default EducationCard;
