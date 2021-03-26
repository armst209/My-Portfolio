import React from "react";
import styled from "styled-components";
import "../../wickedcss.min.css";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 0.9em;
  display: flex;
  width: 100%;
  font-size: 30px;
  justify-content: center;
  font-weight: bold;

  color: #fff;
  .turn {
    cursor: pointer;
    transform: rotate(90deg);
  }
  @media only screen and (max-height: 400px) {
    display: none;
  }
`;

const Scrolldown = () => {
  return (
    <MyScroll>
      <a className="arrow-link" href="#about">
        <i className="lni lni-chevron-down tobottom"></i>
      </a>
    </MyScroll>
  );
};

export default Scrolldown;
