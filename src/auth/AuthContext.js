import React from "react";

export const AuthContext = React.createContext({
  userInfo: "",
  setUserInfo: (user) =>
    console.log("Did you forgot to add AuthContext on top of your app?"),
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = React.useState("");

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
