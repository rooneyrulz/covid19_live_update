import React from "react";
import { Route, Switch } from "react-router-dom";

const Dashboard = React.lazy(() => import("../../pages/Dashboard"));
const LocalCase = React.lazy(() => import("../../pages/LocalCase"));
const GlobalCase = React.lazy(() => import("../../pages/GlobalCase"));

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/local-cases' component={LocalCase} />
    <Route exact path='/global-cases' component={GlobalCase} />
  </Switch>
);

export default Routes;
