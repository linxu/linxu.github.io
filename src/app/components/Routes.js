import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Resume } from "../../features/resume/components/Resume";

const AppRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Component {...rest} {...props} />
        );
      }}
    />
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <AppRoute exact path="/" component={Resume} />
        <AppRoute exact path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
};

export default Routes;
