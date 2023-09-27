import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MoviesRoutes } from "./routes/MoviesRoutes";
import "primereact/resources/primereact.min.css";
import "../node_modules/primeflex/primeflex.css";

import "./movieApp.css";
function App() {
  return (
    <BrowserRouter>
      <MoviesRoutes />
    </BrowserRouter>
  );
}

export default App;
