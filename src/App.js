import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  LoginPage,
  ListPage,
  DetailPage,
  Navbar,
  Me,
  Map,
} from "./components/Index";
import { AuthProvider, AuthRouteComponent } from "./auth/Index";
import { AuthContext } from "./auth/AuthContext.js";

export const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <AuthRouteComponent path="/me">
              <Navbar />
              <Me />
            </AuthRouteComponent>
            <AuthRouteComponent path="/list">
              <Navbar />
              <ListPage />
            </AuthRouteComponent>
            <AuthRouteComponent path="/detail">
              <Navbar />
              <DetailPage />
            </AuthRouteComponent>
            <AuthRouteComponent path="/map">
              <Navbar />
              <Map />
            </AuthRouteComponent>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
