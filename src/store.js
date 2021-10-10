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
      jobs: action.jobs.data,
    };
  }
  return state;
};

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export default createStore(
  combineReducers({ reducerToken,reducerJobs }),
  applyMiddleware(logger, thunk)
);
