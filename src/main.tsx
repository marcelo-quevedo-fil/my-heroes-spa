import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HeroesApp from "./HeroesApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>
);
