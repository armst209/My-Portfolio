import React from "react";
import Mynavbar from "./components/Navbar/Mynavbar";
import Mycarousel from "./components/Carousel/Mycarousel";
import Title from "./components/Title/Title";
import About from "./pages/About/About";
import "./App.css";

const App = () => {
  return (
    <div>
      <Mynavbar />
      <Title />
      <Mycarousel />
      <About />
      My Portfolio
    </div>
  );
};

export default App;
