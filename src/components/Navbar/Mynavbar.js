import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import ClosedNavIcon from "../../assets/icons/3lines_icon_closed.png";
// import OpenNavIcon from "../../assets/icons/3lines_icon.png";
import Logo from "../../assets/icons/kurlogo-01.png";

import "./NavbarStyles.css";

const Mynavbar = () => {
  const [navbar, setNavbar] = useState(false);

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

  const changeNavBg = () => {
    if (window.scrollY >= 600) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBg);

  return (
    <>
      <Navbar
        id="navbar"
        fixed="top"
        collapseOnSelect
        expand="md"
        variant="dark"
        className={
          navbar
            ? "nav-theme active animate-navbar justify-content-between"
            : "nav-theme"
        }
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
