import React ,{useContext,useEffect}from "react";
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

import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";

export const App = () => {

  const { setUserInfo } = useContext(AuthContext);
  const history = useHistory();

  // const ReadCookie=()=>{
  //   console.log('readccookies---------readccookies---------')
  //   // const user = Cookies.get("user")
  //   const user = "sdfsdf"
  //   if(user){
  //     console.log('user infor')
  //   }
  //   useEffect(() => {
  //     return () => {
  //       ReadCookie()
  //     };
  //   }, [])
  // }



   useEffect(() => {
    let readCookie = () => {
      const user = Cookies.get("user")
      console.log('gettt cokkies')
      console.log(user)
        console.log('llego a readCookie')
    if(user){
      setUserInfo(false);
      // history.push("/list");
    }

    };
    readCookie();
  }, []);





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
