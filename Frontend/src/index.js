import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { CartState } from "./components/CartState";
import App from "./App";
import { UserProvider } from "./components/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <CartState>
        <App />
      </CartState>
    </UserProvider>
  </BrowserRouter>
);
