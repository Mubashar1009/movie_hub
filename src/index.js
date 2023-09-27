import React from "react";
import { MoviesApi } from "./services/moviesApi";
import ReactDOM from "react-dom/client";
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import App from "./App";
import "primeicons/primeicons.css";
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
// import "./../node_modules/primeflex/primeflex.scss";
const store = configureStore({
  reducer: {
    [MoviesApi.reducerPath]: MoviesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MoviesApi.middleware),
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
