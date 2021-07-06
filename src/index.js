import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApploadingGIF from "./assets/app-loading.gif";
import "./main.css";

const styles = {
  loadingWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const AppLoading = () => (
  <div className='loading-wrapper' style={styles.loadingWrapper}>
    <img className='app-loading' src={ApploadingGIF} alt='' />
  </div>
);

ReactDOM.render(
  <React.Suspense fallback={<AppLoading />}>
    <App />
  </React.Suspense>,
  document.getElementById("covid_19_live")
);
