import { AnyAction } from "redux";
import { Authenticate } from "../../screens/AuthScreen";

export interface AuthState {
  email: string | null;
  id: string | null;
  token: string | null;
}

type Action = Authenticate;

const INITIAL_STATE: AuthState = {
  email: null,
  id: null,
  token: null
};

const authReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case "authenticate":
      return action.payload;
    default:
      return state;
  }
};
export default authReducer;
