import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as FetchJobs from "../services/FetchJobs";
import { storeJobs } from "../ActionCreator";
import { useDispatch } from "react-redux";
import Jobs from "./Jobs";
import Cookies from "js-cookie";
import "../style/List.scss";

export const ListPage = () => {
  const token = Cookies.get("access_token");
  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();

  const user = Cookies.get("access_token");

  useEffect(() => {
    const fetchData = async () => {
      let response = await FetchJobs.Jobs(token);

      if (response) {
        dispatch(storeJobs(response.data));
        setJobs(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="containerList">
      <h1 className="titleList">List jobs</h1>
      <Jobs />
      <Link to="/detail">Navigate to detail</Link>
    </div>
  );
};
export default ListPage;
