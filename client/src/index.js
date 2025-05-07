import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ServiceContext from "./context/ServiceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ServiceContext>
      <App />
    </ServiceContext>
  </React.StrictMode>
);
