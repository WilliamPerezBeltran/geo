import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";
import * as FetchJobs from "../services/FetchJobs";
import * as obj from "../data/DataJobs.js";
import { storeJobs } from "../ActionCreator";
import { useDispatch } from "react-redux";
import Jobs from "./Jobs";

export const ListPage = () => {
  const store = useStore();
  const token = store.getState().reducerToken.token.access_token;
  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // let response = await FetchJobs.Jobs(token);
      let response = await obj.jobsData;
      if (response) {
        dispatch(storeJobs(response));
        setJobs(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Hello From List Page</h1>
      <Jobs />
      <Link to="/detail">Navigate to detail</Link>
    </>
  );
};
export default ListPage;
