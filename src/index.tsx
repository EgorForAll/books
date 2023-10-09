import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import "./scss/main.scss";
import React from "react";
import { Provider } from "react-redux";
import { setUpStore } from "./store/reducer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setUpStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
