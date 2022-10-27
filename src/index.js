import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
