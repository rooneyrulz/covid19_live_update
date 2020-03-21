import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../pages/Dashboard';
import LocalCase from '../../pages/LocalCase';
import GlobalCase from '../../pages/GlobalCase';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/local-cases' component={LocalCase} />
    <Route exact path='/global-cases' component={GlobalCase} />
  </Switch>
);

export default Routes;
