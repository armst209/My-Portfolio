import React from "react";

const Copyright = () => {
  return (
    <div style={copyStyles}>
      <div>© AARON ARMSTRONG {new Date().getFullYear()}</div>
    </div>
  );
};

const copyStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "black",
  color: "white",
  fontFamily: `'Josefin Sans', sans-serif`,
  paddingBottom: "1em",
};
export default Copyright;
