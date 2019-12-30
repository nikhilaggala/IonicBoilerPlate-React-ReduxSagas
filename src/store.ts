import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import * as R from 'ramda';

import Config from './config/configuration';
import rootReducer from './redux/reducers/index';
import sagas from './redux/sagas/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const USE_LOGGER = Config.reduxLogging;

const middlewares:any = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const SAGA_LOGGING_BLACKLIST = [
  'EFFECT_TRIGGERED',
  'EFFECT_RESOLVED',
  'EFFECT_REJECTED',
];

const logger = createLogger({
  predicate: (getState: any, { type }: any) => (
    USE_LOGGER && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST))
  )
});

let reduxDebugger = (a: any) => a;

const env = 'development';

if (env === 'development' && typeof window !== 'undefined') {
  middlewares.push(logger);
  reduxDebugger = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : reduxDebugger;
}

function _createStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
    )
  );

  sagaMiddleware.run(sagas);

  return store;
}

export default _createStore;