import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";

const AppRouter = () => {
  const isAuth = false;
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => {
        return (
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
          />
        );
      })}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => {
        return (
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
          />
        );
      })}
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
