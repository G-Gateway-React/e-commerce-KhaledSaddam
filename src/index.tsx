import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Favicon from "react-favicon";
import { ImagesPath } from "./images/ImagesPath";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Favicon url={ImagesPath.commerceIcon} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
