import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import MenuIcon from "../../assets/icons/3lines_icon_both.png";

const MyTitleMessage = styled.h1`
  position: absolute;

  padding: 25px;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 60%;
  left: 30%;
  transform: translate(-50%, -50%);
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  padding: 5px;
  font-family: "Josefin Sans", sans-serif;
  .menu-icon {
    padding-top: 20px;
    height: 75px;
  }
  .titleMessage {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title-border {
    border: 3px solid white;
    padding: 20px;
  }
  strong {
    font-size: 1.25em;
  }
  .im-text {
    display: none;
  }
  .hi-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hi-text-2 {
    display: none;
  }
  div {
    color: ${(props) => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
  }
  .main {
    font-size: 50px;
  }
  .sub {
    font-size: 27px;
    letter-spacing: 2px;
    overflow: visible;
  }

  .title-name {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 1800px) {
    .title-border {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 90px;
    }

    .Typewriter {
      font-size: 50px;
    }
  }

  @media only screen and (max-width: 1025px) {
    top: 60%;
    left: 50%;
  }

  @media only screen and (max-width: 770px) {
    top: 70%;
    left: 50%;
  }

  @media only screen and (max-width: 700px) {
    top: 70%;
    left: 50%;
  }

  @media only screen and (max-width: 500px) {
    top: 50%;
    left: 0;
    right: 0;
    transform: scale(0.5);
    border: none;
    background: none;
    .title-border {
      border: none;
      padding: 0;
    }
    .hi-text-2 {
      display: flex;
      position: absolute;
      bottom: 130%;
      color: white;
      font-size: 250px;
    }
    .sub {
      font-size: 40px;
      height: 100px;
    }
    strong {
      font-size: 80px;
    }
    div {
      font-weight: 300;
      width: 600px;
    }
    .hi-text {
      display: none;
    }
    .im-text {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title-name {
      font-size: 1em;
      padding-left: 4px;
    }
  }

  @media only screen and (max-height: 400px) {
    top: 100%;
    .title-border {
      border: none;
    }
    .menu-icon {
      display: none;
    }
  }
  @media only screen and (max-width: 380px) {
    .hi-text-2 {
      bottom: 110%;
    }
  }
  @media only screen and (max-width: 330px) {
    top: 45%;

    .hi-text-2 {
      bottom: 100%;
      font-size: 200px;
    }
  }
  @media only screen and (max-width: 285px) {
    width: 250px;
    transform: translate(-50%, -50%);
    top: 75%;
    font-size: 20px;
    left: 50%;
    strong {
      font-size: 20px;
    }
    .hi-text-2 {
      width: auto;
      font-size: 70px;
    }
    .sub {
      font-size: 15px;
    }
    .menu-icon {
    }
  }
`;

const Title = () => {
  return (
    <MyTitleMessage>
      <div className="hi-text-2" data-aos="fade-right">
        Hi,
      </div>

      <div
        className="titleMessage"
        style={{ color: "white" }}
        data-aos="fade-up"
        // data-aos-duration="1000"
      >
        <div className="heading">
          <div className="title-border">
            <span
              className="title-name"
              data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <div className="im-text">I'm</div>
              <div className="hi-text">Hi, I'm</div>
              <strong>AARON </strong>
              <strong>ARMSTRONG</strong>
              <div className="sub">
                <Typewriter
                  options={{
                    strings: ["Frontend Developer", "Lifelong Learner"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </div>
              <div>
                <img className="menu-icon" src={MenuIcon} alt="menu-icon" />
              </div>
            </span>
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
};

export default Title;
