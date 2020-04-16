import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// REDUX
import { Provider } from 'react-redux';
import Store from './store';

// COMPONENTS
import Routes from './components/routing/Routes';
import AppHeader from './layouts/AppHeader';
import AppFooter from './layouts/AppFooter';

import path from './assets/earth.gif';
import Spinner from './layouts/Spinner';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Fragment>
          <div className='App'>
            <div className='App-header-wrapper'>
              <header className='App-header'>
                <AppHeader />
              </header>
              <br />
              <Spinner path={path} />
            </div>
            <br />
            <main className='App-main'>
              <Route component={Routes} />
            </main>
            <br />
            <footer className='App-footer'>
              <AppFooter />
            </footer>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
