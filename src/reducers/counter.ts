import { Action } from "redux";

export interface ActionWithPayload<T> extends Action {
  payload?: T;
}

const counterReducer = (state = 0, action: ActionWithPayload<number>) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
      break;

    case "DECREMENT":
      return state - 1;
      break;
    case "INCREMENT_STEP":
      if (action.payload) return state + action.payload;
      break;
    default:
      return state;
  }
};

export default counterReducer;
