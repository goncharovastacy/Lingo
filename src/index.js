import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import App from "./components/App/App";
import WordsStore from "./store/WordsStore";
import "./style/index.css";

const stores = {
  WordsStore: new WordsStore(),
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider {...stores}>
    <App />
  </Provider>
);
