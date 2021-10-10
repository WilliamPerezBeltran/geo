import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";

export const DetailPage = () => {
  const store = useStore();

  const [jobDetail, setJobDetail] = useState("");

  const map = () => {};

  useEffect(() => {
    let data = async () => {
      const job = store.getState().reducerDetailJob.job;
      setJobDetail(job);
    };
    data();
  }, []);

  return (
    <>
      <h1>Hello From Detail Page</h1>

      <article className="card" key={jobDetail.id} onClick={() => map()}>
        <header>
          <h2>{jobDetail.title}</h2>
        </header>
        <div>
          <img src={jobDetail.image} width="100" height="50" />
        </div>
        <div className="content">
          <p>{jobDetail.description}</p>

          <p>
            Status: <b>{jobDetail.status}</b>
          </p>
          <p>
            Latitud: <b>{jobDetail.latitude}</b>
          </p>
          <p>
            Longitud: <b>{jobDetail.longitude}</b>
          </p>
          <p>
            Assigned to: <b>{jobDetail.assigned_to}</b>
          </p>
          <p>
            Created_at: <b>{jobDetail.created_at}</b>
          </p>
          <p>
            Updated_at: <b>{jobDetail.updated_at}</b>
          </p>
          <p>
            Date: <b>{jobDetail.date}</b>
          </p>
        </div>
        <footer>footer</footer>
      </article>

      <Link to="/list">Navigate back to list</Link>
    </>
  );
};
export default DetailPage;
