import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";

export const ListPage = () => {
  const store = useStore();
  const token = store.getState().reducer_token.token.access_token;
  console.log(token);
  return (
    <>
      <h1>Hello From List Page</h1>
      <Link to="/detail">Navigate to detail</Link>
    </>
  );
};
export default ListPage;
