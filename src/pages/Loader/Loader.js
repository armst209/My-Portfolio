import React from "react";
import "./LoaderStyles.css";
import wheel from "../../assets/icons/Pulse-1.5s-200px_small.svg";
import Logo from "../../assets/icons/kurlogo-01_low.png";

function Loader() {
  return (
    <div id="loader">
      <img className="bars" src={wheel} alt="loading bars" />
      <img className="logo-load" src={Logo} alt="logo" />
    </div>
  );
}

export default Loader;
