import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// REDUX
import { Provider } from 'react-redux';
import Store from './store';

// COMPONENTS
import AppHeader from './layouts/AppHeader';
import AppFooter from './layouts/AppFooter';
import Dashboard from './pages/Dashboard';
import LocalCase from './pages/LocalCase';
import GlobalCase from './pages/GlobalCase';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Fragment>
          <div className='App'>
            <header className='App-header'>
              <AppHeader />
            </header>
            <main className='App-main'>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/local-cases' component={LocalCase} />
                <Route exact path='/global-cases' component={GlobalCase} />
              </Switch>
            </main>
            <footer className='App-footer'>
              <AppFooter />
            </footer>
          </div>
          <div className='App-overlay'></div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
