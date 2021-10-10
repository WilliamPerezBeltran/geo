import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const init_state_reducer_token = {
  token: [],
};
const reducer_token = (state = init_state_reducer_token, action) => {
  if (action.type === "STORE_TOKEN") {
    return {
      ...state,
      token: action.token,
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
  combineReducers({ reducer_token }),
  applyMiddleware(logger, thunk)
);
