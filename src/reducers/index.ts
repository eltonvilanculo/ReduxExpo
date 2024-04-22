import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const appReducer = combineReducers({
  counterReducer,
  loggedReducer,
});

export default appReducer;
