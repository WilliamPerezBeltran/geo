import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";
import * as FetchJobs from "../services/FetchJobs";
import * as obj from "../data/DataJobs.js";
import "../style/Job.scss";

export const ListPage = () => {
  const store = useStore();
  const token = store.getState().reducer_token.token.access_token;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // let response = await FetchJobs.Jobs(token);
      let response = await obj.jobsData;
      if (response) {
        setJobs(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Hello From List Page</h1>
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
                <footer>footer!</footer>
              </article>
            );
          })}
        </div>
      </div>

      <Link to="/detail">Navigate to detail</Link>
    </>
  );
};
export default ListPage;
