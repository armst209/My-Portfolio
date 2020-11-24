import React from "react";
import "./CarouselStyles.css";
import Carousel from "react-bootstrap/Carousel";
import CaroImage1 from "../../assets/img/profile/aa_headshot_2_smaller.jpg";
import CaroImage2 from "../../assets/img/profile/aa_headshot_3_smaller.jpg";
import MenuIcon from "../../assets/icons/3lines_icon_small.png";
import MenuIcon2 from "../../assets/icons/3lines_icon_small.png";

import Scrolldown from "../Scrolldown/Scrolldown";
import { CardColumns } from "react-bootstrap";

const Mycarousel = () => {
  return (
    <div id="home">
      <Carousel
        controls={false}
        indicators
        interval={5000}
        pauseOnHover={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={CaroImage1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={CaroImage2}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Scrolldown />
    </div>
  );
};

export default Mycarousel;
