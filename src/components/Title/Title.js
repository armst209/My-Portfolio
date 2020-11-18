import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

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
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const Title = () => {
  return (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hi, I'm
            <br />
            <span>
              <strong>AARON ARMSTRONG</strong>
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
    </MyTitleMessage>
  );
};

export default Title;
