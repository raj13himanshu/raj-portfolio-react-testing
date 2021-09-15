import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Himanshu_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer Intern [Sunesto Web Pvt Ltd]"
              date="Oct 2019 - April 2020"
              content={[
                "Works collaboratively in providing resources and processes to empower to rapidly build and operations applications and infrastructure.",
                "Assists engineers with end-to-end development, enabling quality agile, continuous delivery of software.",
                "Writes code utilized by global engineers, interacting with the engineering organization and learning development from concept to production.",
                "Coordinates configuring, coding, developing, and documenting specifications throughout the project lifecycle.",
                "Redesigned company website and created features to enhance the user experience and optimized designs for smartphones.",
                "worked in developing CI/CD pipelines for code deployment using Git Pages, Netlify and Heroku.",
              ]}
            />

             <h3 className="resume-title">Hobbies and Interests</h3>
            <Resumecontent
              title=""
              content={[
                " I prefer to help old and poor peoples.",
                " I would love to travel and work around the globe.",
                " In my free time, I prefer to work as a local guide on google map.",
                " Utilizing time by engaging myself in different co-curricular activities.",
              ]}
            />


            {/* <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                "Worked on building front-end UI design using HTML5, CSS3, JavaScript jQuery, and building API routes using Node and express.js.",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="GNIOT _ B-Tech - [UP, Greater Noida] "
              date="2018 - Passout"
              content={["Graduated under Computer Science Engineering", "61%"]}
            />

            <h3 className="resume-title">Certification and Awards</h3>
            <Resumecontent
              title=""
              content={[
                " Awarded as a Senior Coordinator of Campus Social club & Technical Club.",
                " Certificate of awarded to completion of Core Java, SQL training from JSpiders Institute Bangalore.",
                " Certificate of Merit awarded to completion of Core Java project based training from RCPL.",
                " Certificate of awarded to completion of JavaScript Algorithm and Data Structures from freeCodeCamp.org.",
                " Certificate earned from HackerRank for successfully completion of assessment test of Java, JavaScript, ReactJS & SQL.",
              ]}
            />

            


  <h3 className="resume-title">Personal Strength</h3>
            <Resumecontent
              title=""
              content={[
                "  Good attitude and positive thinking.",
                "  Ability to cope up with different situations.",
                "  Quick learner of new things, hardworking and enthusiastic.",
                "  If any of tasks assigned, would like to take responsibility as an initiative.",
              ]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
