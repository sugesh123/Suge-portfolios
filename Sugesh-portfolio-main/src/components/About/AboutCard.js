import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SUGESH R </span>
            from <span className="purple"> DHARMAPURI, TAMILNADU.</span>
            <br />
            I am  a software developer.
            <br />
            I have completed BE (COMPUTER SCIENCE AND TECHNOLOGY) at SNSCE,
            Coimbatore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn New Things
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> T
            </li> */}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SUGESH R</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
