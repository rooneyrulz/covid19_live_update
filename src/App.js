import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.css';

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
        <div className='App App-container'>
          <header className='App-header container'>
            <AppHeader />
          </header>
          <main className='App-main container'>
            <Spinner path={path} />
            <Route component={Routes} />
          </main>
          <footer className='App-footer container'>
            <AppFooter />
          </footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
