import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/a.png";

import editor from "../../Assets/Projects/spotify.webp";
import chatify from "../../Assets/Projects/PH_DE_0700_BENEFITS_R0524.webp";
// import suicide from "../../Assets/Projects/bmi.png";
import bitsOfCode from "../../Assets/Projects/usbank-login-id.png";

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
              imgPath={chatify}
              isBlog={false}
              title=<b>"E-Commerce Face Skin products"</b>
              description="	The Quick Travel Information system is a web-based application designed to  information. It features a user-friendly interface that allows users to search. The system ensures quick access to  e-commerce page for face skin products using HTML and CSS, we can structure it as a product listing page. This page will display multiple products, each with an image, name, price, enhancing the user experience. This project highlights Sugesh's expertise in developing intuitive and functional web applications."
              // ghLink="https://github.com/Nithish-design/quick-travel"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}p
              isBlog={false}
              title=<b>"Bank login Page"</b>
              description="Developed a Polling Website that offers real-time updates and displays polling results dynamically.  bank login page using HTML, CSS, and JavaScript. This example includes the layout of the login form, basic styling, and a simple JavaScript function for form validation."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=<b>"Spotify Clone"</b>
              description="	Created a Spotify Clone, showcasing proficiency in precise music and intuitive interfaces.	Designed and developed web pages using front-end (React, HTML, CSS, ,   JavaScript)  technologies."
              ghLink="https://github.com/Rooban-p/spotifyClone"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=<b>"Age-Calculator"</b>
              description="Created a general Age calculator, showcasing proficiency in precise calculations and intuitive interfaces.Designed and developed web pages using front-end (React, HTML, CSS, Bootstrap,   JavaScript) and back-end (Node.js) technologies."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title=<b>"BMI-Calculator"</b>
              description="Created a general Age calculator, showcasing proficiency in precise calculations and intuitive interfaces.Designed and developed web pages using front-end (React, HTML, CSS, Bootstrap,   JavaScript) and back-end (Node.js) technologies."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
