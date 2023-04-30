import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BookContextProvider } from "./Contexts/BookContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
