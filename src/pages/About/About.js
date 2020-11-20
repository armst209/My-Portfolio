import React from "react";
import "./AboutStyles.css";
import Profile from "../../assets/img/profile/aa_headshot_circle_2.png";
import "../../wickedcss.min.css";
import Button from "react-bootstrap/Button";
import "../About/AboutStyles.css";

const About = () => {
  return (
    <div
      id="about"
      style={
        {
          // backgroundColor: "whitesmoke",
          // backgroundImage: `url(${bgImage}), radial-gradient(#444, #111)`,
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center center",
        }
      }
    >
      <div className="about-h1">
        <h1
          className=""
          style={{
            fontFamily: `'Josefin Sans', sans-serif`,
            marginTop: "40px",
            fontSize: "2.5rem",
            color: "black",
            width: "100%",
            marginBottom: "2em",
          }}
        >
          ABOUT ME
          <div className="line-1 slideRight"></div>
          <div className="line-2 slideLeft"></div>
        </h1>
      </div>

      <div className="about-comp">
        <div>
          <div className="img-thumb">
            <img className="about-img" src={Profile} alt="profile" />
          </div>
        </div>
        <div className="para-links">
          <h4
            className="about-h4"
            style={{
              fontFamily: `'Josefin Sans', sans-serif`,
            }}
          >
            Hi there! I'm <strong>AARON ARMSTRONG.</strong>
          </h4>
          <div className="para">
            <br />I am a former educator, technical recruiter and Japanese
            translator turned frontend developer. As a recruiter, I was very
            curious about the technologies my clients were using, so I decided
            to pursue an after-hours boot camp at Grand Circus (Detroit, MI).
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
            {/* <div className="about-hover">
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
            </div> */}
            <div className="about-hover">
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
            <div className="about-hover">
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
            <div className="about-hover">
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

export default About;
