import React from "react";
import AppLoaderGIF from "assets/app-loading.gif";

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

const AppLoading = () => (
  <div className='loading-wrapper' style={styles.loadingWrapper}>
    <img className='app-loading' src={AppLoaderGIF} alt='' />
  </div>
);

export default AppLoading;
