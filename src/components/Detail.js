import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";
import Job from "./Job";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import * as FetchJobs from "../services/FetchJobs.js";
import { useDispatch } from "react-redux";
import { storeJobs } from "../ActionCreator";

export const DetailPage = () => {
  const store = useStore();
  const [jobDetail, setJobDetail] = useState("");
  const token = Cookies.get("access_token");
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    let data = async () => {
      let response = await FetchJobs.Jobs(token);
      let jobs = response.data;
      let detailJobId = Cookies.get("detailJobId");

      let job = jobs.filter((job) => {
        if (job.id == detailJobId) {
          return job;
        }
      });

      setJobDetail(job[0]);
      if (response) {
        dispatch(storeJobs(jobs));
      }
    };
    data();
  }, []);

  return (
    <div className="job">
    <div className="cards">
      <h1>Detail Job</h1>
      <Job detailInformation={jobDetail} />

      <Link to="/list">Navigate back to list</Link>
    </div>
    </div>
  );
};
export default DetailPage;
