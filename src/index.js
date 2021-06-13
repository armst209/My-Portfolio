import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import Loader from "./pages/Loader/Loader";
import "../src/App.css";
import { Fragment } from "react";

// let loaderDisplay = () => {
//   let loading = document.getElementById("loader");
//   loading.style.opacity = "0";
//   loading.style.visibility = "hidden";
// };

// window.onload = loaderDisplay;

ReactDOM.render(
  <Fragment>
    {/* <Loader id="loader" /> */}
    <App />
  </Fragment>,
  document.getElementById("root")
);
