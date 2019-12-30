import { combineReducers } from 'redux';

import AuthReducer from './auth';

const appReducer = combineReducers({
  auth: AuthReducer
});

export default appReducer;
