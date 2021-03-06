import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./reducers/authReducer";
const reducers = combineReducers({
  form: formReducer,
  auth: authReducer
});

export default reducers;
