import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// COMPONENTS
import Routes from "components/routing/Routes";
import AppLayout from "layouts/AppLayout";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <AppLayout>
          <Route component={Routes} />
        </AppLayout>
      </div>
    </Router>
  );
};

export default App;
