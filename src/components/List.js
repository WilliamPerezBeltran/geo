import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";
import * as FetchJobs from "../services/FetchJobs";
import * as obj from "../data/DataJobs.js";

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
      {jobs.map((jobItem, jobId) => {
        return (
          <div key={jobId}>
            <div>
              <article>
                <header>
                  <h2>Lorem ipsum dolor sit amet consectetu</h2>
                </header>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique pariatur beatae incidunt illo soluta labore autem
                    sunt, quos et. Laboriosam amet ad quisquam, veniam, tenetur
                    ex explicabo dolorem sapiente beatae!
                  </p>
                </div>
                <footer>I have a footer!</footer>
              </article>
            </div>
          </div>
        );
      })}

      <Link to="/detail">Navigate to detail</Link>
    </>
  );
};
export default ListPage;
