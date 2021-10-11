import React from "react";
import { Route, RouteProps, useHistory } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext.js";

import Cookies from "js-cookie";

export const AuthRouteComponent = (props) => {
  const { userInfo } = React.useContext(AuthContext);
  const history = useHistory();

  React.useEffect(() => {
    const user = Cookies.get("access_token");
    if (user) {
      history.replace(props.path);
    } else {
      if (!userInfo) {
        history.push("/");
      }
    }
  }, [props?.location?.pathname]);

  return <Route {...props} />;
};
