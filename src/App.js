import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// REDUX
import { Provider } from "react-redux";
import Store from "./store";

// COMPONENTS
import Routes from "./components/routing/Routes";
import AppHeader from "./layouts/AppHeader";
import AppFooter from "./layouts/AppFooter";
import CountryFlag from "./components/CountryFlag";

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <div className='App App-container'>
          <div className='container'>
            <header className='App-header'>
              <AppHeader />
            </header>
            <main className='App-main'>
              {/* <CountryFlag /> */}
              <Route component={Routes} />
            </main>
            <hr />
            <footer className='App-footer'>
              <AppFooter />
            </footer>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
