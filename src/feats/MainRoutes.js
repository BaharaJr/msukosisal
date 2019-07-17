import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Err from "./Err";
import Single from "./Single";

const MainRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Gallery" Component={Gallery} />
        <Route exact path="/Gallery/:one" Component={Single} />
        <Route Component={Err} />
      </Switch>
    </div>
  );
};

export default MainRoutes;
