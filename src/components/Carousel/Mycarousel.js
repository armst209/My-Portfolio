import React from "react";
import "./CarouselStyles.css";
import CaroImage1 from "../../assets/img/profile/aa_headshot_2_low_50_1_50.jpg";
// import CaroImage2 from "../../assets/img/profile/aa_headshot_3_low.webp";
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
