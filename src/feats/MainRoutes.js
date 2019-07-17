import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Err from "./Err";
import Single from "./Single";

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Gallery" component={Gallery} />
      <Route path="/Gallery/:one" component={Single} />
      <Route Component={Err} />
    </Switch>
  );
};

export default MainRoutes;
