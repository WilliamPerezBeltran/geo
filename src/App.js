import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage, ListPage, DetailPage } from "./components/Index";
import { AuthProvider, AuthRouteComponent } from "./auth/Index";
export const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <AuthRouteComponent path="/list">
              <ListPage />
            </AuthRouteComponent>
            <AuthRouteComponent path="/detail">
              <DetailPage />
            </AuthRouteComponent>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
