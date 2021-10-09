import React from "react";
import { Link } from "react-router-dom";

export const ListPage = () => {
  return (
    <>
      <h1>Hello From List Page</h1>
      <Link to="/detail">Navigate to detail</Link>
    </>
  );
};
