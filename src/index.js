import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "store";

import AppLoading from "layouts/AppLoader";
import App from "./App";
import "./main.css";

ReactDOM.render(
  <React.Suspense fallback={<AppLoading />}>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Suspense>,
  document.getElementById("covid_19_live")
);
