import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const initStateReducerToken = {
  token: [],
};
const reducerToken = (state = initStateReducerToken, action) => {
  if (action.type === "storeToken") {
    return {
      ...state,
      token: action.token,
    };
  }
  return state;
};

const initStateReducerJobs = {
  jobs: [],
};
const reducerJobs = (state = initStateReducerJobs, action) => {
  if (action.type === "storeJobs") {
    return {
      ...state,
      jobs: action.jobs,
    };
  }
  return state;
};

const initStateDetailJob = {
  job: {},
};
const reducerDetailJob = (state = initStateDetailJob, action) => {
  if (action.type === "detailJob") {
    return {
      ...state,
      job: action.job,
    };
  }
  return state;
};

const logger = (store) => (next) => (action) => {
  let result = next(action);
  return result;
};

export default createStore(
  combineReducers({ reducerToken, reducerJobs, reducerDetailJob }),
  applyMiddleware(logger, thunk)
);
