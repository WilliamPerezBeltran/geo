import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import "../style/Job.scss";
import { storeJobs } from "../ActionCreator";

export const Jobs = () => {
  const store = useStore();
  const jobs = store.getState().reducerJobs.jobs;

  return (
    <>
      <div className="jobs">
        <div className="cards">
          {jobs.map((jobItem, jobId) => {
            return (
              <article className="card" key={jobId}>
                <header>
                  <h2>{jobItem.title}</h2>
                </header>
                <div>
                  <img src={jobItem.image} width="100" height="50" />
                </div>
                <div className="content">
                  <p>{jobItem.description}</p>

                  <p>
                    Status: <b>{jobItem.status}</b>
                  </p>
                  <p>
                    Latitud: <b>{jobItem.latitude}</b>
                  </p>
                  <p>
                    Longitud: <b>{jobItem.longitude}</b>
                  </p>
                  <p>
                    Assigned to: <b>{jobItem.assigned_to}</b>
                  </p>
                  <p>
                    Created_at: <b>{jobItem.created_at}</b>
                  </p>
                  <p>
                    Updated_at: <b>{jobItem.updated_at}</b>
                  </p>
                  <p>
                    Date: <b>{jobItem.date}</b>
                  </p>
                </div>
                <footer>footer</footer>
              </article>
            );
          })}
        </div>
      </div>

    </>
  );
};
export default Jobs;
