import { combineReducers } from "redux";

import dashboard from "./dashboard";
import current from "./create-qoute";
import auth from "./authReducer";

const reducers = combineReducers({
  dashboard: dashboard,
  current: current,
  auth: auth
});

export default reducers;
