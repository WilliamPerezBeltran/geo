import React, { Fragment } from "react";
import { useStore } from "react-redux";
import "../style/Job.scss";
import Job from "./Job";

export const Jobs = () => {
  const store = useStore();
  const jobs = store.getState().reducerJobs.jobs;

  return (
    <>
      <div className="jobs">
        <div className="cards">
          {jobs.map((jobItem, jobId) => {
            return (
              <Fragment key={jobId}>
                <Job detailInformation={jobItem} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Jobs;
