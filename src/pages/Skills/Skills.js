import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "../../App.css";

// skills
import { skills } from "./skills-data";

const Skills = () => {
  return (
    <div id="skills">
      <div className="skill-h1">
        <h1>
          SKILLS
          <div
            data-aos="fade-right"
            className="line-1"
            style={{ borderColor: "white" }}
          ></div>
          <div
            data-aos="fade-left"
            className="line-2"
            style={{ borderColor: "white" }}
          ></div>
        </h1>
      </div>
      <div className="skill-cards" data-aos="fade-up">
        <Card className="focus">
          <Card.Body>
            <Card.Title className="text-center card-title skill-title">
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

        <Card className="focus">
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

        <Card className="focus">
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

        <Card className="focus">
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

        <Card className="focus">
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

        <Card className="focus">
          <Card.Body>
            <Card.Title className="text-center  card-title skill-title">
              Version Control
            </Card.Title>
            <hr />
            <Card.Text className="card-text d-flex justify-content-start flex-column">
              {skills.versionControl.map((skill, index) => (
                <span className="p-2" key={index}>
                  <a
                    className="text-decoration-none"
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={skill.imgSrc}
                      alt={skills.imgAltText}
                      rounded
                      className="image-style m-1"
                    ></Image>
                    {skill.skillName}
                  </a>
                </span>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="focus"></Card>
      </div>
    </div>
  );
};

export default Skills;
