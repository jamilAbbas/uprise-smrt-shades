import { combineReducers } from "redux";

import dashboard from "./dashboard";
import current from "./create-qoute";
import auth from "./authReducer";
import price from "./priceReducer"

const reducers = combineReducers({
  dashboard: dashboard,
  current: current,
  auth: auth,
  price: price
});

export default reducers;
