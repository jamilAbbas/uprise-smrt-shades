import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"

import dashboard from "./dashboard";
import current from "./create-qoute";
import auth from "./authReducer";
import price from "./priceReducer"

const reducers = combineReducers({
  form: formReducer,
  dashboard: dashboard,
  current: current,
  auth: auth,
  price: price
});

export default reducers;
