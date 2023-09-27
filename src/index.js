import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import "./style/index.css";
import App from "./App";
import WordsStore from "./store/WordsStore";

const stores = {
  WordsStore: new WordsStore(),
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider {...stores}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
