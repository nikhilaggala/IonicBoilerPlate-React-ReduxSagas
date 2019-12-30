import { createReducer } from 'reduxsauce';
import * as R from 'ramda';

import actionTypes from '../actionsTypes/auth';

// types
import { TActionCreatorType, TReducerExtraData } from '../types';

type reducerParamsType = {
  state: AuthInitialState
  action: TActionCreatorType
};

// type interface for initial state
interface AuthInitialState {
  username: string
  displayname: string
  accessToken: string
  refreshToken: string
  signinExtraData: TReducerExtraData
  signupExtraData: TReducerExtraData
};

// initial state

const INITIAL_EXTRA_DATA = {
  loading: false,
  error: false
}

const INITIAL_STATE = {
  username: '',
  displayname: '',
  accessToken: '',
  refreshToken: '',
  memberType: '',

  signinExtraData: INITIAL_EXTRA_DATA,
  signupExtraData: INITIAL_EXTRA_DATA
};

const signupPending = (state: AuthInitialState) => {

  const transformations = {
    signupExtraData: {
      loading: R.T
    }
  };

  return R.evolve(transformations, state);
};

const signupSuccess = (state: AuthInitialState, action: TActionCreatorType) => {

  const {username, displayname, accessToken, refreshToken} = action.payload;

  const transformations = {
    username: () => username,
    displayname: () => displayname,
    accessToken: () => accessToken,
    refreshToken: () => refreshToken,
    signupExtraData: {
      loading: R.F
    }
  };

  return R.evolve(transformations, state);
};

const signupFailure = (state: AuthInitialState) => {

  const transformations = {
    signupExtraData: {
      loading: R.F,
      error: R.T
    }
  };

  return R.evolve(transformations, state);
};

const getIdTokenFromUser = (state: AuthInitialState) => state;

const ACTION_HANDLERS = {
  [actionTypes.SIGNUP_PENDING]: signupPending,
  [actionTypes.SIGNUP_SUCCESS]: signupSuccess,
  [actionTypes.SIGNUP_FAILURE]: signupFailure,
  [actionTypes.GET_ID_TOKEN_FROM_USER]: getIdTokenFromUser,

};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
