import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { WordsContextProvider } from "./context/WordsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WordsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WordsContextProvider>
);
