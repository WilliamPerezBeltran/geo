import React, { Fragment, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext.js";
import "../style/Login.scss";
import * as FetchLogin from "../services/FetchLogin";

export const LoginPage = () => {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const { setUserInfo } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNavigation = async (e) => {
    e.preventDefault();

    if (email && password) {
      let response = await FetchLogin.Login(email, password);
      if (response.hasOwnProperty("access_token")) {
        console.log("response successfully");
        console.log(response);
        setUserInfo(email);
        history.push("/list");
      } else {
        alert("Password or email is invalid");
      }
    }
  };

  return (
    <Fragment>
      <div className="wrapper">
        <div className="title">Login</div>

        <form className="form" onSubmit={handleNavigation}>
          <div className="inputfield">
            <label>Email</label>
            <input
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Ingrese email"
            ></input>
            <span className="text-danger ">{errors?.email?.message}</span>
          </div>
          <div className="inputfield">
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Ingrese el password"
            ></input>
            <span className="text-danger">{errors?.name?.message}</span>
          </div>

          <div className="inputfield">
            <input type="submit" value="Registrarse" className="btn"></input>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
