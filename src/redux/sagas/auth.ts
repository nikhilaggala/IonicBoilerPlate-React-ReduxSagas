import { fork, takeEvery, call, take, put } from 'redux-saga/effects';
import { Plugins } from '@capacitor/core';

import authActions from '../actionCreators/auth';
import authTypes from '../actionsTypes/auth';

import { TActionCreatorType } from '../types';

const { Storage } = Plugins;

function* handleSignup({ type, payload = {} }: TActionCreatorType) {
  // example to reset stack
  // const {history} = payload;
  // history.replace('/home');
  // const api = '';

  const {username, email, password} = payload;

  try {

    yield put(authActions.signupSuccess({
      username,
      email,
    }));

  } catch (e) {
    yield put(authActions.signupFailure());
  }
}

function* signupWatcher() {
  yield takeEvery(authTypes.SIGNUP_PENDING, handleSignup);
}

function* handleSignin({ type, payload = {} }: TActionCreatorType) {
  // const {history} = payload;
  // history.replace('/home');
  // const api = '';

  const { email, password, history } = payload;

  try {


    yield put(authActions.signinSuccess({
      username: '', // get username from our backend
      email,
    }));

    history.replace('/home');

  } catch (e) {
    yield put(authActions.signinFailure());
  }
}

function* signinWatcher() {
  yield takeEvery(authTypes.SIGNIN_PENDING, handleSignin);
}

function* watcher() {
  yield fork(signupWatcher);
  yield fork(signinWatcher);
}

export default {
  watcher
};
