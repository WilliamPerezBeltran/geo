import React from "react";
import { Route, RouteProps, useHistory } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext.js";

export const AuthRouteComponent = (props) => {
  const { userInfo } = React.useContext(AuthContext);
  const history = useHistory();

  React.useEffect(() => {
    if (!userInfo) {
    	console.log('llegoo a AuthRouteComponent')
      history.push("/");
    }
  }, [props?.location?.pathname]);

  return <Route {...props} />;
};
