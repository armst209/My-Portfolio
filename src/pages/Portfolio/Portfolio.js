import React from "react";
import "./PortfolioStyles.css";
import "../../App.css";
import { UrlButton } from "@merc/react-timeline";
import PickAFlick from "../../assets/img/website-screenshots/paf-homepage.png";
import TTT from "../../assets/img/website-screenshots/ttt-homepage.png";
import Break from "../../assets/img/website-screenshots/break-hompage.png";
import GITFIND from "../../assets/img/website-screenshots/githufind.png";

// projects

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills

import L_ANGULAR from "../../assets/img/skills/angular.svg";

import L_GITHUB_API from "../../assets/img/skills/github.png";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.png";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import L_POSTMAN from "../../assets/img/skills/postman.png";
import L_MDB from "../../assets/img/skills/moviedb.svg";
import L_JQUERY from "../../assets/img/skills/jquery.png";
import L_PHASER from "../../assets/img/skills/phaser.png";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_SQL from "../../assets/img/skills/sql.jpg";
import L_REACT from "../../assets/img/skills/react.svg";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="port-h1">
        <h1
          style={{
            fontFamily: `'Josefin Sans', sans-serif`,
            marginTop: "40px",
            fontSize: "2.5rem",
            color: "black",
            width: "100%",
            marginBottom: "2em",
          }}
        >
          PORTFOLIO
          <div
            data-aos="fade-right"
            className="line-1"
            style={{ borderColor: "black" }}
          ></div>
          <div
            data-aos="fade-left"
            className="line-2"
            style={{ borderColor: "black" }}
          ></div>
        </h1>
      </div>
      <div className="portfolio-cards" data-aos="fade-up">
        <div className="paf-card card card-bord">
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <div className="card-img-text" style={{ lineHeight: "1" }}>
                    <p>Pick-A-Flick: A Movie Browsing App </p>
                    <p>(August 2020)</p>
                  </div>
                  <img
                    className="card-image"
                    src={PickAFlick}
                    alt="pickaflick"
                  />
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <div>PROJECT DETAILS</div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description: </strong>A web application that
                      allows users to search for movies by genre, release year
                      and actor.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>
                          Users can save favorited movies to personal watchlist
                          (Favorites Bar)
                        </li>
                        <li>Users can view chosen movie's description</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML5}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_ANGULAR}
                              alt="Angular"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Angular
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_POSTMAN}
                              alt="Postman"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Postman
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_TYPESCRIPT}
                              alt="TypeScript"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            TypeScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_MDB}
                              alt="Movie Database API"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            The Movie Database API
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div
              className="d-flex justify-content-between flex-nowrap text-center"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <UrlButton href="https://paf-movie-dbg.surge.sh/" target="_blank">
                <div>SEE LIVE</div>
              </UrlButton>
              <UrlButton
                href="https://github.com/armst209/Pick-A-Flick-Website"
                target="_blank"
              >
                <div>SOURCE CODE</div>
              </UrlButton>
            </div>
          </div>
        </div>
        <div className="break-card card card-bord">
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <div className="card-img-text" style={{ lineHeight: "1" }}>
                    <p>Break: A Gaming Platform Web App </p>
                    <p>(September 2020)</p>
                  </div>
                  <img className="card-image" src={Break} alt="" />
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <div>PROJECT DETAILS</div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> For our final project at
                      Grand Circus, we decided to really challenge ourselves and
                      go above and beyond. This is a huge passion project for
                      the three of us, since we all share common interests in
                      anime and video games. All artwork and music was created
                      by the students. We implemented our own database, three
                      different API's, Angular, Phaser, CSS, HTML, Typescript,
                      Javascript, SCSS, JSON, Jquery and SQL. The project is an
                      2D platform game that is based off the three developers.
                      Amber, Aaron and Garrett.
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML5}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="JavaScript"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_TYPESCRIPT}
                              alt="TypeScript"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            TypeScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JQUERY}
                              alt="JQuery"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            jQuery
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_ANGULAR}
                              alt="Angular"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Angular
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_PHASER}
                              alt="Phaser"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Phaser
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_NODE_JS}
                              alt="Node.js"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Node.js
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_EXPRESS}
                              alt="Express"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Express
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HEROKU}
                              alt="Heroku"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Heroku
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_SQL}
                              alt="SQL"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            SQL
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div
              className="d-flex justify-content-between flex-nowrap text-center"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <UrlButton href="http://break-ent.surge.sh/" target="_blank">
                <div>SEE LIVE</div>
              </UrlButton>
              <UrlButton
                href="https://github.com/armst209/Final-Project"
                target="_blank"
              >
                <div>SOURCE CODE</div>
              </UrlButton>
            </div>
          </div>
        </div>
        <div className="ttt-card card card-bord">
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <div className="card-img-text" style={{ lineHeight: "1" }}>
                    <p>Sample Landing Page for Product/Online Shop</p>
                    <p>(October 2020)</p>
                  </div>
                  <img className="card-image" src={TTT} alt="" />
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <div>PROJECT DETAILS</div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description: </strong>
                      Simple, sample landing page made for fun. Used to test and
                      review material learned in bootcamp.
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML5}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_ANGULAR}
                              alt="Angular"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Angular
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="Github API"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div
              className="d-flex justify-content-between flex-nowrap text-center"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <UrlButton
                href="http://ttt-mobile-suits.surge.sh/"
                target="_blank"
              >
                <div>SEE LIVE</div>
              </UrlButton>
              <UrlButton
                href="https://github.com/armst209/Sample-Landing-Page"
                target="_blank"
              >
                <div>SOURCE CODE</div>
              </UrlButton>
            </div>
          </div>
        </div>
        <div className="gitfinder-card card card-bord">
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <div className="card-img-text" style={{ lineHeight: "1" }}>
                    <p>Github Finder</p>
                    <span>(December 2020)</span>
                  </div>
                  <img className="card-image" src={GITFIND} alt="" />
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    <div>PROJECT DETAILS</div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description: </strong>
                      Small project used to increase understanding of React
                      hooks and Context API
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML5}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REACT}
                              alt="React"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            React
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_JAVASCRIPT}
                              alt="Javascript"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_GITHUB_API}
                              alt="Github API"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Github API
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div
              className="d-flex justify-content-between flex-nowrap text-center"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <UrlButton href="http://git-h-finder.surge.sh/" target="_blank">
                <div>SEE LIVE</div>
              </UrlButton>
              <UrlButton
                href="https://github.com/armst209/github-finder"
                target="_blank"
              >
                <div>SOURCE CODE</div>
              </UrlButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
