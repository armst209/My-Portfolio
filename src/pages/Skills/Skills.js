import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SkillsStyles.css";
import bgImage from "../../assets/img/background/keyboard.jpg";

// skills
import { skills } from "./skills-data";

const Skills = () => {
  return (
    <div
      id="skills"
      style={{
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: `url(${bgImage}),  radial-gradient(#444, #111)`,
        borderTop: "4px solid black",
      }}
    >
      <div className="skill-h1">
        <h1
          className=""
          style={{
            fontFamily: `'Josefin Sans', sans-serif`,
            marginTop: "40px",
            fontSize: "2.5rem",
            color: "white",
            width: "100%",
            marginBottom: "2em",
          }}
        >
          SKILLS
          <div
            className="line-1 slideRight"
            style={{ borderColor: "white" }}
          ></div>
          <div
            className="line-2 slideLeft"
            style={{ borderColor: "white" }}
          ></div>
        </h1>
      </div>
      <div className="skill-cards">
        <CardDeck
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 20px;",
          }}
        >
          <Row className="d-flex justify-content-around">
            {/* Frontend */}
            <Col md={4}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  {/* Frontend */}
                  <Card.Title className="text-center  card-title skill-title">
                    Frontend
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.frontend.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Backend */}
            <Col md={4}>
              <Card className="focus" style={{ marginBottom: "10px" }}>
                <Card.Body>
                  <Card.Title className="text-center  card-title skill-title">
                    Backend
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.backend.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Frameworks & Libraries */}

              <Card className="focus" style={{ marginBottom: "10px" }}>
                <Card.Body>
                  <Card.Title className="text-center  card-title skill-title">
                    <div>Frameworks/</div>
                    <div>Libraries</div>
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.frameworks.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Hosting Platforms */}
              <Card className="focus">
                <Card.Body>
                  <Card.Title className="text-center  card-title skill-title">
                    Hosting Platforms
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.hostingPlatforms.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Programming Languages */}
            <Col md={4}>
              <Card className="focus" style={{ marginBottom: "10px" }}>
                <Card.Body>
                  <Card.Title className="text-center  card-title skill-title">
                    Programming Languages
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.programmingLanguages.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Database */}

              <Card className="focus" style={{ marginBottom: "10px" }}>
                <Card.Body>
                  <Card.Title className="text-center  card-title skill-title">
                    Database
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.databases.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* Version Control */}

              <Card className="focus" style={{ marginBottom: "10px" }}>
                <Card.Body>
                  <Card.Title className="text-center  card-title skill-title">
                    Version Control
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    <span className="p-2">
                      <a
                        className="text-decoration-none"
                        href={skills.versionControl[0].link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skills.versionControl[0].imgSrc}
                          alt={skills.versionControl[0].imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skills.versionControl[0].skillName}
                      </a>
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="focus" style={{ marginBottom: "10px" }}>
                <Card.Body>
                  <Card.Title className="text-center  card-title skill-title">
                    DAWs
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.daws.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardDeck>
      </div>
    </div>
  );
};

export default Skills;
