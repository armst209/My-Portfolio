import React from "react";
import "./ContactStyles.css";
import "../About/AboutStyles.css";
import "../../components/Carousel/CarouselStyles.css";
import Button from "react-bootstrap/Button";
import Copyright from "../../components/Copyright/Copyright";
import "../../wickedcss.min.css";
import bgImage from "../../assets/img/background/contact_low.webp";

const Contact = () => {
  return (
    <div
      id="contact"
      style={{
        backgroundBlendMode: "multiply",
        backgroundRepeat: "repeat",
        backgroundPosition: "center center",
        backgroundImage: `url(${bgImage}),  radial-gradient(#444, #111)`,
        borderTop: "4px solid black",
        objectFit: "fill",
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
                    Email Me
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
