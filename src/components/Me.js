import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";
import * as FetchMe from "../services/FetchPersonalData.js";
import * as obj from "../data/DataMe";
import "../style/Me.scss";

export const Me = () => {
  const store = useStore();
    const token = store.getState().reducerToken.token.access_token;
  const [personalData, setPersonalData] = useState("");

  useEffect(() => {
    let data = async () => {
      // let response = await FetchMe.Me(token);
      let response = obj.personalData;
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
            <li>id: {personalData.id}</li>
            <li>name: {personalData.name}</li>
            <li>email: {personalData.email}</li>
            <li>email_verified_at: {personalData.email_verified_at}</li>
            <li>created_at: {personalData.created_at}</li>
            <li>updated_at: {personalData.updated_at}</li>
          </ul>
        </div>
      </div>

      <Link to="/list">Navigate back to list</Link>
    </div>
  );
};
export default Me;
