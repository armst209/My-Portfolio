import React from "react";
import "./ContactStyles.css";
import "../About/AboutStyles.css";
import "../../components/Carousel/CarouselStyles.css";
import Button from "react-bootstrap/Button";
import Copyright from "../../components/Copyright/Copyright";
import "../../wickedcss.min.css";

import bgImage from "../../assets/img/background/contact.jpg";

const Contact = () => {
  return (
    <div
      id="contact"
      style={{
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: `url(${bgImage}),  radial-gradient(#444, #111)`,
        borderTop: "4px solid black",
      }}
    >
      <div className="contact-h1">
        <h1
          className=""
          style={{
            fontFamily: `'Josefin Sans', sans-serif`,
            marginTop: "40px",
            fontSize: "2.5rem",
            color: "white",
            marginBottom: "1em",
          }}
        >
          CONTACT
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
      <div className="contact-links">
        <div className="contact-btn">
          <a
            href="mailto:armst209@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="">
              <div className="contact-button">
                <div className="contact-button-text">
                  <div>Email Me</div>
                  <div>
                    <i
                      class="fas fa-envelope-square"
                      style={{ marginLeft: "5px" }}
                    ></i>
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

        <div className="contact-btn">
          <a
            href="https://github.com/armst209"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="">
              <div className="contact-button">
                <div className="contact-button-text">
                  <div>Github</div>
                  <div>
                    <i class="fab fa-github" style={{ marginLeft: "5px" }}></i>
                  </div>
                </div>
              </div>
            </Button>
          </a>
        </div>
      </div>

      <Copyright />
    </div>
  );
};

export default Contact;
