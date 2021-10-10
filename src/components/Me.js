import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";
import * as FetchMe from "../services/FetchPersonalData.js";

import * as obj from "../data/DataMe"
export const Me = () => {
  const store = useStore();
  const token = store.getState().reducer_token.token.access_token;

  useEffect(() => {
    let data = async () => {
      console.log(obj.personalData)
      let response = await FetchMe.Me(token);
      if (response) {
      }
    };
    data();
  }, []);

  return (
    <div>
      <h1>Me</h1>
    </div>
  );
};
export default Me;
