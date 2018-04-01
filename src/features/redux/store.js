/* @flow */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../redux/reducers';
import type { State, MainProps } from '../types';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    // ...options
  });
  middlewares.push(logger);
}

export const initState = (props: MainProps): State => ({
  conf: {
    length: props.length || 10,
    time: props.time || 60,
  },
  vars: {
    status: 0,
    time: 0,
    string: '',
    mistakes: 0,
  },
});

export const configureStore = (props: MainProps) => createStore(reducer, initState(props), applyMiddleware(...middlewares));
