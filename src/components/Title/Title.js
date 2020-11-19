import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import MenuIcon from "../../assets/icons/3lines_icon.png";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.719);
  margin-top: -125px;
  text-align: center;
  padding: 10px;
  font-family: "Josefin Sans", sans-serif;
  strong {
    font-size: 1.25em;
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
  }

  .title-name {
    display: flex;
    flex-direction: column;
  }
  .menu-icon {
    display: flex;
    position: absolute;
    transform: scale(0.04);
    bottom: -90%;
  }
  .menu-icon-2 {
    display: flex;
    position: absolute;
    transform: scale(0.04) rotate(180deg);
    top: -90%;
  }

  @media only screen and (max-width: 700px) {
    top: 60%;
    left: 0;
    transform: scale(0.7);
  }
  @media only screen and (max-width: 500px) {
    top: 50%;
    left: 0;
    right: 0;
    transform: scale(0.5);
    .title-name {
      font-size: 1em;
      padding-left: 4px;
    }
    .menu-icon {
      display: flex;
      position: absolute;
      top: -70%;
      transform: scale(0.04);
      border: 3px solid black;
      box-shadow: 2px 2px 5px black;
    }
    .menu-icon-2 {
      display: flex;
      position: absolute;
      top: -80%;
      transform: scale(0.04) rotate(180deg);
      border: 3px solid black;
      box-shadow: 2px 2px 5px black;
    }
  }
`;

const Title = () => {
  return (
    <MyTitleMessage>
      <img className="menu-icon-2" src={MenuIcon} alt="" />
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hi, I'm
            <br />
            <span class="title-name">
              <strong>AARON </strong>
              <strong>ARMSTRONG</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Web Developer", "Student", "Musician"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
        </div>
      </div>
      <img className="menu-icon" src={MenuIcon} alt="" />
    </MyTitleMessage>
  );
};

export default Title;
