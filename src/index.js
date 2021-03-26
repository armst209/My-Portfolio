import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Loader from "./pages/Loader/Loader";
import { Fragment } from "react";

let loaderDisplay = () => {
  let loading = document.getElementById("loader");
  loading.style.opacity = "0";
  loading.style.visibility = "hidden";
  // setTimeout(() => {
  //   loading.style.opacity = "0";
  //   loading.style.visibility = "hidden";
  // }, 2000);
};

window.onload = loaderDisplay;

ReactDOM.render(
  <Fragment>
    <Loader id="loader" />
    <App />
  </Fragment>,
  document.getElementById("root")
);
