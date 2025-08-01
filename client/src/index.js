import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ServiceProvider } from "./context/ServiceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ServiceProvider>
      <App />
    </ServiceProvider>
  </React.StrictMode>
);
