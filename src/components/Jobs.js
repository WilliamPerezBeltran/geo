import React, { useEffect, useState, Fragment } from "react";
import { useStore } from "react-redux";
import "../style/Job.scss";
import { detailJob } from "../ActionCreator";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Job from "./Job";
export const Jobs = () => {
  const history = useHistory();
  const store = useStore();
  const jobs = store.getState().reducerJobs.jobs;
  const dispatch = useDispatch();

  return (
    <>
      <div className="jobs">
        <div className="cards">
          {jobs.map((jobItem, jobId) => {
            return (
              <Fragment key={jobId}>
                <Job detailInformation={jobItem}  />
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Jobs;
