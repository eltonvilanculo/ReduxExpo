import { ActionWithPayload } from "../reducers/counter";

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const incrementWithSteps = (step: number): ActionWithPayload<number> => {
  return {
    type: "INCREMENT_STEP",
    payload: step,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const signIn = () => {
  return {
    type: "SIGNED_IN",
  };
};
