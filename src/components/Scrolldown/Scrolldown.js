import React from "react";
import styled from "styled-components";

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
      {/* <div className="turn">
        <span> &gt; </span>
      </div> */}
      <i class="lni lni-chevron-down"></i>
    </MyScroll>
  );
};

export default Scrolldown;
