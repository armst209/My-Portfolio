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
  // text-shadow: 1px 1px #45a29e;
  color: #fff;
  .turn {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

const Scrolldown = () => {
  return (
    <MyScroll>
      <a className="arrow-link floater" href="#about">
        <i class="lni lni-chevron-down"></i>
      </a>
    </MyScroll>
  );
};

export default Scrolldown;
