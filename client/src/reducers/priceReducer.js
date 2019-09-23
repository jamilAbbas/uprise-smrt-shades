import * as constants from "../actions/constants";
const initialstate = {
  data: {},
  loading: false
};

const dashboard = (state = initialstate, action) => {
  switch (action.type) {
    case constants.GET_PRICE_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case constants.GET_PRICE_SUCCESS: {
      return Object.assign({}, state, {
        data: action.data,
        loading: false
      });
    }
    case constants.GET_PRICE_FAILURE: {
      return Object.assign({}, state, {
        loading: false
      });
    }

    default:
      return state;
  }
};

export default dashboard;
