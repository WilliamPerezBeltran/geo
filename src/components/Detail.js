import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";
import Job from "./Job";

export const DetailPage = () => {
  const store = useStore();

  const [jobDetail, setJobDetail] = useState("");

  useEffect(() => {
    let data = () => {
      const job = store.getState().reducerDetailJob.job;
      setJobDetail(job);
    };
    data();
  }, []);

  return (
    <>
      <h1>Hello From Detail Page</h1>
      <Job detailInformation={jobDetail} />
      <Link to="/list">Navigate back to list</Link>
    </>
  );
};
export default DetailPage;
