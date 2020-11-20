import React from "react";
import Mynavbar from "./components/Navbar/Mynavbar";
import Mycarousel from "./components/Carousel/Mycarousel";
import Title from "./components/Title/Title";
import About from "./pages/About/About";
import Copyright from "./components/Copyright/Copyright";

import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import "./App.css";
import Portfolio from "./pages/Portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Mynavbar />
      <Title />
      <Mycarousel />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Copyright />
    </div>
  );
};

export default App;
