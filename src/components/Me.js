import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as FetchMe from "../services/FetchPersonalData.js";
import "../style/Me.scss";
import Cookies from "js-cookie";

export const Me = () => {
  const token = Cookies.get("access_token");
  const [personalData, setPersonalData] = useState("");

  useEffect(() => {
    let data = async () => {
      let response = await FetchMe.Me(token);
      if (response) {
        setPersonalData(response);
      }
    };
    data();
  }, []);

  return (
    <div>
      <div className="containerMe">
        <div className="content">
          <h1>Personal data of {personalData.name} </h1>
          <ul>
            <li> <b>id</b> : {personalData.id}</li>
            <li> <b>name</b> : {personalData.name}</li>
            <li> <b>email</b> : {personalData.email}</li>
            <li> <b>email_verified_at</b> : {personalData.email_verified_at}</li>
            <li> <b>created_at</b> : {personalData.created_at}</li>
            <li> <b>updated_at</b> : {personalData.updated_at}</li>
          </ul>
          <Link to="/list">Navigate back to list</Link>
        </div>
      </div>

    </div>
  );
};
export default Me;
