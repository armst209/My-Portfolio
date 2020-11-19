import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AboutStyles.css";
import Profile from "../../assets/img/profile/326652_2557718583407_1895126079_o.jpg";
import "../../wickedcss.min.css";
import Image from "react-bootstrap/Image";
import MenuIcon from "../../assets/icons/3lines_icon_black.png";
import Button from "react-bootstrap/Button";
import "../About/AboutStyles.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-h1">
        <h1 className="">
          ABOUT ME
          <div className="line-1 slideRight"></div>
          <div className="line-2 slideLeft"></div>
        </h1>
      </div>

      <div className="about-comp">
        <div className="img-thumbnail">
          <img className="about-img" src={Profile} alt="profile" />
        </div>
        <div className="para-links">
          <h4
            className="about-h4"
            style={{
              fontFamily: `'Josefin Sans', sans-serif`,
            }}
          >
            Hi there! I'm <strong>&nbsp;AARON ARMSTRONG.</strong>
          </h4>
          <div className="para">
            <br />I am a former educator, technical recruiter and Japanese
            translator turned software developer. As a recruiter, I was very
            curious about the technologies my clients were using, so I decided
            to pursue an after-hours boot camp at Grand Circus.
            <br />
            My background in education and translation has strengthened my
            organizational skills and attention to detail while my time as a
            recruiter has developed my project management skills.
            <br />
            As I have transitioned into the role of software developer, these
            skills, combined with the technical knowledge I gained at Grand
            Circus, have become vital in how I approach coding issues, team
            projects, and learning new technologies. I hope to add my experience
            and skills to your tech team.
            <br />
          </div>

          <div className="about-links">
            <div>
              <a href="#contact">
                <Button variant="">
                  <div className="about-btn">
                    <div className="about-btn-text">
                      <div>Contact Me</div>

                      <div>
                        <i
                          className="far fa-address-book"
                          style={{ marginLeft: "5px" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1UYj_WS0cVFzE2talDd8Ejbj38tSoegiO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="">
                  <div className="about-btn">
                    <div className="about-btn-text">
                      <div>My Resume</div>
                    </div>
                  </div>
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/armst209"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="">
                  <div className="about-btn">
                    <div className="about-btn-text">
                      <div>Github</div>
                      <div>
                        <i
                          class="fab fa-github"
                          style={{ marginLeft: "5px" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/aaronlamararmstrong/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="">
                  <div className="about-btn">
                    <div className="about-btn-text">
                      <div>LinkedIn</div>
                      <div>
                        <i
                          class="fab fa-linkedin"
                          style={{ marginLeft: "5px" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const containStlye = {
  margin: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "none",
};

export default About;
