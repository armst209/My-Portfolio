import React from "react";
import Mynavbar from "./components/Navbar/Mynavbar";
import Mycarousel from "./components/Carousel/Mycarousel";
import Title from "./components/Title/Title";
import "./App.css";

const App = () => {
  return (
    <div>
      <Mynavbar />
      <Title />
      <Mycarousel />
      My Portfolio
    </div>
  );
};

export default App;
