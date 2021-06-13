import React from "react";
import "../../App.css";

import Button from "react-bootstrap/Button";
import Copyright from "../../components/Copyright/Copyright";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-h1">
        <h1>
          CONTACT
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
      <div className="contact-links" data-aos="fade-up">
        <div className="contact-btn">
          <a
            href="mailto:armst209@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="">
              <div className="contact-button">
                <div className="contact-button-text">
                  <div>
                    <div>Email Me</div>
                    <div>
                      <i
                        className="fas fa-envelope-square"
                        style={{ marginLeft: "5px" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </a>
        </div>

        <div className="contact-btn">
          <a
            href="https://www.linkedin.com/in/aaronlamararmstrong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="">
              <div className="contact-button">
                <div className="contact-button-text">
                  <div>
                    <div>LinkedIn</div>

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

        <div className="contact-btn">
          <a
            href="https://github.com/armst209"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="">
              <div className="contact-button">
                <div className="contact-button-text">
                  <div>
                    <div> Github</div>
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
      </div>

      <div className="contact-up">
        <a href="#home">
          <i className="lni lni-chevron-up"></i>
        </a>
      </div>

      <Copyright />
    </div>
  );
};

export default Contact;
