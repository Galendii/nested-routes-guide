import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import paths from "./paths.js";
import { AdminRoute } from "./types.js";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {paths.admin.map(({ path, component, name }) => (
          <AdminRoute exact key={name} path={path} component={component} />
        ))}
        {paths.public.map(({ path, component, name }) => (
          <Route exact key={name} path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
