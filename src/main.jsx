import React from "react";
import ReactDOM from "react-dom/client";
import App1 from "./app1";  // Importing from app2.jsx

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);
