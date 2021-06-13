import React from "react";
import Mynavbar from "./components/Navbar/Mynavbar";
import Mycarousel from "./components/Carousel/Mycarousel";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import "./App.css";
import Portfolio from "./pages/Portfolio/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1200,
});

const App = () => {
  return (
    <div>
      <Mynavbar />
      <Mycarousel />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
