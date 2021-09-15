import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/ReactRajTechWeb.png";
import emotion from "../../Assets/Projects/rajWebReactFirebase.png";
import editor from "../../Assets/Projects/webPortfolioHrs.png";
import chatify from "../../Assets/Projects/HrsPortfolio.png";
import suicide from "../../Assets/Projects/iplPart2.jpg";
import bitsOfCode from "../../Assets/Projects/iplPart1.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Personal Portfolio Website"
              description="This is a fully responsive personal resume or portfolio template that consists of 5 colors,Light & Dark demos. This is a simple, modern, creative and responsive site. This is built with HTML5,CSS3,JAVASCRIPT.All components used in the template are well commented, w3 validated and are well documented."
              link="https://him-portfolio.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Service Provider"
              description="Grow your business with RajTechnical website. This website is created to provide services to the client. We are the team of talented developer making websites. It’s 100% responsive with clean codes. All components used in the template are well commented, w3 validated and are well documented."
              link="https://reactwebsite-raj013.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Responsive Landing website"
              description="This is a responsive website using technologies like html, css and javascript. This is responsive on any devices like mobile, tab and pc. its a landing page website. It’s 100% responsive with clean codes. All components used in the template are well commented, w3 validated and are well documented."
              link="https://web-portfolio-hrs.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="IPL dataset visualization I"
              description="Head First Web development - Part 1 - Code. In this project, i've calculate and plot interesting statistics from the Indian Premier League. This is a project which has all records of ipl season and solved some problems of ipl records by using web technoligies like html, css and javascript. It’s 100% responsive with clean codes."
              link="https://himanshu-ipl1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="IPL dataset visualization II"
              description="Head First Web development - Part 2 - Code. In this project, it displays a dynamic information and intractive too. Here, it'll Read user input, Perform logic/calculations on the server according to the user input,then render the results.if we'll enter any year between 2008 to 2019 then display the most economical bowlers records."
              link="https://himanshu-ipl2.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Payment Website"
              description="This website is created using React.js and firebase. This is created to provide online payment services. We are the team of talented developer making websites. In this project, Using technologies like React.js, javascript, html, css in this website. It’s 100% responsive with clean codes. All components used in the template are well commented, w3 validated and are well documented."
              link="https://raj-web.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
