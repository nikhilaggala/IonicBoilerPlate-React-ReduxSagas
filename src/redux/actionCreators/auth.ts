import actionsTypes from '../actionsTypes/auth';

// types
import * as Types from '../types';
import {TApiError} from '../../types';

const signupPending = (payload: Types.TSignup): Types.TActionCreatorType => ({
  type: actionsTypes.SIGNUP_PENDING,
  payload
});

const signupSuccess = (payload: Types.TSignup): Types.TActionCreatorType => ({
  type: actionsTypes.SIGNUP_SUCCESS,
  payload
});

const signupFailure = (payload?: TApiError): Types.TActionCreatorType => ({
  type: actionsTypes.SIGNUP_FAILURE,
  payload
});

const signinPending = (payload: Types.Tsignin): Types.TActionCreatorType => ({
  type: actionsTypes.SIGNIN_PENDING,
  payload
});

const signinSuccess = (payload: Types.Tsignin): Types.TActionCreatorType => ({
  type: actionsTypes.SIGNIN_SUCCESS,
  payload
});

const signinFailure = (payload?: TApiError): Types.TActionCreatorType => ({
  type: actionsTypes.SIGNIN_PENDING,
  payload
});

const getIdTokenFromUser = (user: any): Types.TActionCreatorType => ({
  type: actionsTypes.GET_ID_TOKEN_FROM_USER,
  payload: {user}
});

const signoutUser = (history: any): Types.TActionCreatorType => ({
  type: actionsTypes.SIGNOUT_USER,
  payload: {
    history
  }
});

export default {
  signupPending,
  signupSuccess,
  signupFailure,

  signinPending,
  signinSuccess,
  signinFailure,

  signoutUser,

  getIdTokenFromUser,
};
