import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./storage/store";
import Snackbar from "./components/global/Snackbar.jsx";
import CustomSnackbar from "./components/global/Snackbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CustomSnackbar />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
