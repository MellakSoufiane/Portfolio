import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import upload from "../../Assets/Projects/Upload.PNG";
import qcm from "../../Assets/Projects/qcm.png";
import movie from "../../Assets/Projects/movie.png";
import powercard from "../../Assets/Projects/Powercard.png";
import management from "../../Assets/Projects/management.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={management}
              isBlog={false}
              title="Employee Management Application"
              description="Realization of an application for managing employees and their employment contracts.
              using : Spring Boot, Spring Data, Spring Security, MySQL, Thymeleaf,
              Git, Github.
              "
              link="https://github.com/MellakSoufiane/Projet_Innovation"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={upload}
              isBlog={false}
              title="Upload Video Application"
              description="Functionnality of this application :
              User should be able to Signup/Login.
              User should be able to see a list of previously uploaded videos.
              User should be able to reset his password.
              User should be able to upload/add new Videos.
              User should be able to Edit a Video fields after upload.
              User should be able to Delete his Videos.
              using : React/Nextjs, Apollo Client, Nodejs, GraphQL(Apollo Server / Express),
              Heroku, Git, Github.
              "
              link="https://github.com/MellakSoufiane/Projet_Innovation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powercard}
              isBlog={false}
              title="PowerCARD Application"
              description="Create PowerCARDs profils using Angular Spring Boot and MongoDB. Functionality : Create , List, Delete"
              link="https://github.com/MellakSoufiane/PowerCard_Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qcm}
              isBlog={false}
              title="QCM Application"
              description="A simple QCM using javascripts, html and css"
              link="https://github.com/MellakSoufiane/QCM-Appli"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="MicroServices"
              description="A simple project of movie catalog and rating using spring."
              link="https://github.com/MellakSoufiane/MicroservicesSpring"
            />
          </Col>

      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
