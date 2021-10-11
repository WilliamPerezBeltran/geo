import React, { Fragment, useState, useEffect } from "react";
import { useStore } from "react-redux";
import "../style/Job.scss";
import Job from "./Job";

export const Jobs = () => {
  const store = useStore();
  const [jobs, setJobs] = useState([]);

  return (
    <>
      <div className="jobs">
        <h1>jobs</h1>
        <div className="cards">
          {store.getState().reducerJobs.jobs.map((jobItem, jobId) => {
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
