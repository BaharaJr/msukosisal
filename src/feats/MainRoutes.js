import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Err from "./Err";
import Single from "./Single";
import About from "../components/About";

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Gallery" component={Gallery} />
      <Route path="/products/:slug" component={Single} />
      <Route path="/About" component={About} />
      <Route component={Err} />
    </Switch>
  );
};

export default MainRoutes;
