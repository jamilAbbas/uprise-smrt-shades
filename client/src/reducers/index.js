import { combineReducers } from 'redux';

import dashboard from './dashboard';

const reducers = combineReducers({
	dashboard: dashboard,
});

export default reducers;