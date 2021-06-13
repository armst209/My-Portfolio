import React from "react";
import "../../App.css";
import CaroImage1 from "../../assets/img/profile/profile_blended_aaron.png";
import Title from "../Title/Title";
import Scrolldown from "../Scrolldown/Scrolldown";
import { Fragment } from "react";

const Mycarousel = () => {
  return (
    <Fragment>
      {/* Background is pushed to back so image doesn't have to be resized for 4k and larger screens */}
      <div className="bg-pushed-back"></div>
      <div id="home">
        {/* Image not visible, only used to keep shape of component */}
        <div className="home-img">
          <img
            className="d-block w-100 custom-img"
            src={CaroImage1}
            alt="Aaron Armstrong Head Shot"
          />
        </div>
        <Title />
        <div>
          <Scrolldown />
        </div>
      </div>
    </Fragment>
  );
};

export default Mycarousel;
