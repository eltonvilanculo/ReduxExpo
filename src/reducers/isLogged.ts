import { Action } from "redux";

const loggedReducer = (state = false, action: Action) => {
  switch (action.type) {
    case "SIGNED_IN":
      return !state;
      break;
    default:
      return state;
  }
};

export default loggedReducer;
