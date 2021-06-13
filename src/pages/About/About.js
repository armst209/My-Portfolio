import React from "react";

import "../../App.css";
import Profile from "../../assets/img/profile/aa_headshot_circle_2_50_1_50.webp";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about-h1">
        <h1>
          ABOUT ME
          <div data-aos="fade-right" className="line-1"></div>
          <div data-aos="fade-left" className="line-2"></div>
        </h1>
      </div>

      <div className="about-comp" data-aos="fade-up">
        <div>
          <div className="img-thumb">
            <img className="about-img" src={Profile} alt="Aaron Armstrong" />
          </div>
        </div>
        <div className="para-links">
          <h4 className="about-h4">
            Hi there! I'm <strong>AARON ARMSTRONG.</strong>
          </h4>
          <div className="para">
            <br />I am a former educator, technical recruiter and Japanese
            translator turned frontend developer. As a recruiter, I was very
            curious about the technologies my clients were using, so I decided
            to pursue an after-hours boot camp at Grand Circus (Detroit, MI).
            <br />
            As I have transitioned into the role of frontend developer, these
            skills, combined with the technical knowledge I gained at Grand
            Circus, have become vital in how I approach coding issues, team
            projects, and learning new technologies.
          </div>

          <div className="about-links">
            <div className="about-hover">
              <a
                href="https://drive.google.com/file/d/1uqi1D_RiMxZm0d8nR-GTyHeNaL487Ijk/view?usp=sharing"
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
            <div className="about-hover">
              <a
                href="https://github.com/armst209"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="">
                  <div className="about-btn">
                    <div className="about-btn-text">
                      <div>
                        Github
                        <div>
                          <i
                            className="fab fa-github"
                            style={{ marginLeft: "5px" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Button>
              </a>
            </div>
            <div className="about-hover">
              <a
                href="https://www.linkedin.com/in/aaronlamararmstrong/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="">
                  <div className="about-btn">
                    <div className="about-btn-text">
                      <div>
                        LinkedIn
                        <div>
                          <i
                            className="fab fa-linkedin"
                            style={{ marginLeft: "5px" }}
                          ></i>
                        </div>
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

export default About;
