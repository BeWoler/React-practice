import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CounterComponent from "../pages/CounterPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/counter">
        <CounterComponent />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to="/error" />
    </Switch>
  );
};

export default AppRouter;
