import React from "react";
import "./CarouselStyles.css";
import Carousel from "react-bootstrap/Carousel";
import CaroImage1 from "../../assets/img/profile/aa_headshot_2.jpg";
import CaroImage2 from "../../assets/img/profile/aa_headshot_3.jpg";
import CaroImage3 from "../../assets/img/profile/aa_actionshot_1.jpg";
import Scrolldown from "../Scrolldown/Scrolldown";

const Mycarousel = () => {
  return (
    <div id="home">
      <Carousel
        controls={false}
        indicators
        interval={2500}
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
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={CaroImage3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Scrolldown />
    </div>
  );
};

export default Mycarousel;
