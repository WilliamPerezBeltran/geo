import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";
import * as FetchJobs from "../services/FetchJobs";

export const ListPage = () => {
  const store = useStore();
  const token = store.getState().reducer_token.token.access_token;

  useEffect(() => {
    const data = async () => {
      let response = await FetchJobs.Jobs(token);
      if (response) {
      }
    };
    data();
  }, []);

  return (
    <>
      <h1>Hello From List Page</h1>
      <Link to="/detail">Navigate to detail</Link>
    </>
  );
};
export default ListPage;
