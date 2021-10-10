import React, { useState, useEffect } from "react";
import { useStore } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { detailJob } from "../ActionCreator";

export const Job = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const jobDetail = props.detailInformation;

  const passData = (jobItem) => {
    dispatch(detailJob(jobItem));
    history.push("/detail");
  };

  return (
    <article
      className="card"
      onClick={() => passData(jobDetail)}
    >
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
  );
};
export default Job;
