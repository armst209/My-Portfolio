import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/kurlogo-01.png";
import { Transition } from "react-transition-group";
// import { css } from "emotion";
import "./NavbarStyles.css";

const Mynavbar = () => {
  const [homeIcon, setHomeIcon] = useState(<i class="lni lni-home"></i>);
  const [aboutIcon, setAboutIcon] = useState(
    <i className="fas fa-address-card"></i>
  );
  const [skillsIcon, setSkillsIcon] = useState(
    <i class="fas fa-clipboard-list"></i>
  );
  const [expIcon, setExpIcon] = useState(
    <i class="fas fa-chalkboard-teacher"></i>
  );
  const [projectsIcon, setProjectsIcon] = useState(
    <i class="fas fa-briefcase"></i>
  );

  const [contactIcon, setContactIcon] = useState(
    <i class="far fa-address-book"></i>
  );

  //Hover Icon functions
  const setIconHover = (homeIcon) => {
    setHomeIcon(homeIcon);
  };
  const setIconHoverAbt = (aboutIcon) => {
    setAboutIcon(aboutIcon);
  };
  const setIconHoverSkills = (skillsIcon) => {
    setSkillsIcon(skillsIcon);
  };
  const setIconHoverExp = (expIcon) => {
    setExpIcon(expIcon);
  };
  const setIconHoverProjects = (projectsIcon) => {
    setProjectsIcon(projectsIcon);
  };

  const setIconHoverContact = (contactIcon) => {
    setContactIcon(contactIcon);
  };

  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="md"
        variant="dark"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Navbar.Brand href="#home">
          <img className="logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="hover"
              onMouseEnter={() => setIconHover("Home")}
              onMouseOut={() => setIconHover(<i className="lni lni-home"></i>)}
              href="#home"
            >
              {homeIcon}
            </Nav.Link>

            <Nav.Link
              className="hover"
              onMouseEnter={() => setIconHoverAbt("About")}
              onMouseOut={() =>
                setIconHoverAbt(<i class="fas fa-address-card"></i>)
              }
              href="#about"
            >
              {aboutIcon}
            </Nav.Link>
            <Nav.Link
              className="hover"
              onMouseEnter={() => setIconHoverSkills("Skills")}
              onMouseOut={() =>
                setIconHoverSkills(<i class="fas fa-clipboard-list"></i>)
              }
              href="#skills"
            >
              {skillsIcon}
            </Nav.Link>
            <Nav.Link
              className="hover"
              onMouseEnter={() => setIconHoverExp("Experience")}
              onMouseOut={() =>
                setIconHoverExp(<i class="fas fa-chalkboard-teacher"></i>)
              }
              href="#experience"
            >
              {expIcon}
            </Nav.Link>
            <Nav.Link
              className="hover"
              onMouseEnter={() => setIconHoverProjects("Projects")}
              onMouseOut={() =>
                setIconHoverProjects(<i class="fas fa-briefcase"></i>)
              }
              href="#projects"
            >
              {projectsIcon}
            </Nav.Link>
            <Nav.Link
              className="hover"
              onMouseEnter={() => setIconHoverContact("Contact")}
              onMouseOut={() =>
                setIconHoverContact(<i class="far fa-address-book"></i>)
              }
              href="#contact"
            >
              {contactIcon}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Mynavbar;
