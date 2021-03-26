import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/kurlogo-01_low.webp";
import hamburger from "../../assets/icons/3lines_icon_closed_small.png";
import "./NavbarStyles.css";

// NAVIGATION HOVER HOOKS
const Mynavbar = () => {
  const [navbar, setNavbar] = useState(false);

  const [homeIcon, setHomeIcon] = useState(<i className="lni lni-home"></i>);

  const [aboutIcon, setAboutIcon] = useState(
    <i className="far fa-address-card"></i>
  );
  const [skillsIcon, setSkillsIcon] = useState(
    <i className="lni lni-certificate"></i>
  );

  const [projectsIcon, setProjectsIcon] = useState(
    <i className="lni lni-briefcase"></i>
  );

  const [contactIcon, setContactIcon] = useState(
    <i className="far fa-address-book"></i>
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

  const setIconHoverProjects = (projectsIcon) => {
    setProjectsIcon(projectsIcon);
  };

  const setIconHoverContact = (contactIcon) => {
    setContactIcon(contactIcon);
  };

  //NAVBAR Scroll

  const changeNavBg = () => {
    if (window.scrollY >= 550) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBg);

  let closeMobileNavOnTouch = () => {
    let mobileNav = document.querySelector(".mobile-navigation");
    // mobileNav.classList.add(".mobile-nav-close");
    mobileNav.style.display = "none";
  };

  window.addEventListener("touchstart", closeMobileNavOnTouch);

  // NAVIGATION HAMBURGER TOGGLE
  let mobileNavActive = true;

  let toggleNav = () => {
    let getMobileNavigation = document.querySelector(".mobile-navigation");
    let getMobileNavigationUL = document.querySelector(".mobile-navigation ul");
    if (mobileNavActive === false) {
      getMobileNavigation.style.width = "1px";
      getMobileNavigation.style.left = "99.5%";
      getMobileNavigationUL.style.visibility = "hidden";

      mobileNavActive = false;
    } else if (mobileNavActive === true) {
      getMobileNavigation.style.left = "80%";
      getMobileNavigation.style.width = "20%";
      getMobileNavigationUL.style.width = "auto";
      getMobileNavigationUL.style.visibility = "visible";
      mobileNavActive = true;
    }
  };

  let closeMobileNav = () => {
    let closeMobileNav = document.querySelector(".mobile-navigation");
    let closeMobileNavUL = document.querySelector(".mobile-navigation ul");
    closeMobileNav.style.width = "1px";
    closeMobileNav.style.left = "99.5%";
    closeMobileNavUL.style.visibility = "hidden";
  };

  return (
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
      <Navbar.Brand href="https://ala-armstrong.com">
        <img className="logo" src={Logo} alt="logo" />
      </Navbar.Brand>
      <div
        className="navbar-ham-icon"
        aria-controls="responsive-navbar-nav"
        onClick={() => toggleNav()}
      >
        <img src={hamburger} alt="hamburger" />
      </div>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            className="hover"
            onMouseEnter={() => setIconHover("Home")}
            onMouseOut={() => setIconHover(<i className="lni lni-home"></i>)}
            href="#home"
          >
            {homeIcon}
            {/* <div className="mobile-nav-text">Home</div> */}
          </Nav.Link>

          <Nav.Link
            className="hover"
            onMouseEnter={() => setIconHoverAbt("About")}
            onMouseOut={() =>
              setIconHoverAbt(<i className="far fa-address-card"></i>)
            }
            href="#about"
          >
            {aboutIcon}
          </Nav.Link>
          <Nav.Link
            className="hover"
            onMouseEnter={() => setIconHoverSkills("Skills")}
            onMouseOut={() =>
              setIconHoverSkills(<i className="lni lni-certificate"></i>)
            }
            href="#skills"
          >
            {skillsIcon}
            {/* <div className="mobile-nav-text">Skills</div> */}
          </Nav.Link>
          <Nav.Link
            className="hover"
            onMouseEnter={() => setIconHoverProjects("Portfolio")}
            onMouseOut={() =>
              setIconHoverProjects(<i className="lni lni-briefcase"></i>)
            }
            href="#portfolio"
          >
            {projectsIcon}
          </Nav.Link>
          <Nav.Link
            className="hover"
            onMouseEnter={() => setIconHoverContact("Contact")}
            onMouseOut={() =>
              setIconHoverContact(<i className="far fa-address-book"></i>)
            }
            href="#contact"
          >
            {contactIcon}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* Mobile Navbar */}
      <aside className="mobile-navigation">
        <ul>
          <li className="x-button" onClick={() => closeMobileNav()}>
            <p>
              X<div>Close</div>
            </p>
          </li>
          <li>
            <a href="#home">
              <i className="lni lni-home"></i>
              <div>Home</div>
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="far fa-address-card"></i>
              <div>About</div>
            </a>
          </li>
          <li>
            <a href="#skills">
              <i className="lni lni-certificate"></i>
              <div>Skills</div>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i className="lni lni-briefcase"></i>
              <div>Portfolio</div>
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="far fa-address-book"></i>
              <div>Contact</div>
            </a>
          </li>
        </ul>
      </aside>
    </Navbar>
  );
};

export default Mynavbar;
