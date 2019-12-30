import { fork, call, take, put } from 'redux-saga/effects';
import { Plugins } from '@capacitor/core';

import authActions from '../actionCreators/auth';
import bootstrapTypes from '../actionsTypes/bootstrap';

const { Storage } = Plugins;

function* verifyUser () {
  while(true) {
    const { payload: { history } } = yield take(bootstrapTypes.VERIFY_USER);

    const { value } = yield call([Storage, Storage.get], { key: 'accessToken' });

    if (value) {
      //  If token, take him to home
      history.replace('/home');

    } else {
      // If no token, redirect to signup page
      history.replace('/signup');
    }
  };
}

function* watcher() {
  yield fork(verifyUser);
}


export default {
  watcher
};
