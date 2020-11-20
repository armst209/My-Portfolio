import React from "react";
import "./PortfolioStyles.css";
import "../../App.css";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import PickAFlick from "../../assets/img/website-screenshots/paf-homepage.png";
import TTT from "../../assets/img/website-screenshots/ttt-homepage.png";
import Break from "../../assets/img/website-screenshots/break-hompage.png";
import bgImage from "../../assets/img/profile/aa_actionshot_1.jpg";
// projects
import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
import L_MernTipCalc from "../../assets/img/projects/mern_tip_calc.webp";
import L_GetGitHubInfo from "../../assets/img/projects/get_github_info.webp";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_ANGULAR from "../../assets/img/skills/angular.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import L_POSTMAN from "../../assets/img/skills/postman.png";
import L_MDB from "../../assets/img/skills/moviedb.svg";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      style={
        {
          // backgroundColor: "whitesmoke",
          // backgroundImage: `url(${bgImage})`,
        }
      }
    >
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
            className="line-1 slideRight"
            style={{ borderColor: "black" }}
          ></div>
          <div
            className="line-2 slideLeft"
            style={{ borderColor: "black" }}
          ></div>
        </h1>
      </div>
      <div className="portfolio-cards">
        <div className="paf-card card">
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
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
                      <strong>Description:</strong>A web application that allows
                      users to search for movies by genre, release year and
                      actor.
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
        <div className="break-card card">
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
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
                      <strong>Description:</strong> werwfwfwefsfsdfdsf
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>sfsfsfsdfsdf</li>
                        <li>sfsdfsfdsf</li>
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
                              src={L_GIT}
                              alt="Github API"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            GitHub API
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
        <div className="ttt-card card">
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
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
                      <strong>Description:</strong> ertetreterte
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>ertertretee</li>
                        <li>ertetee</li>
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
                            React
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
      </div>
    </div>
  );
};

export default Portfolio;
