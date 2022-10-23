import React from "react";

import AppHeader from "layouts/AppHeader";
import AppFooter from "layouts/AppFooter";

const AppLayout = ({ children }) => {
  return (
    <div className='container'>
      <header className='App-header'>
        <AppHeader />
      </header>
      <main className='App-main'>{children}</main>
      <hr />
      <footer className='App-footer'>
        <AppFooter />
      </footer>
    </div>
  );
};

export default AppLayout;
