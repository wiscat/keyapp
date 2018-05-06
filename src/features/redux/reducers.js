/* @flow */

import { combineReducers } from 'redux';
import { REPLACE_STATE, UPDATE_STRING, ON_MISTAKE, UPDATE_TIME, TRAINING_START, TRAINING_STOP } from './actions';
import type { Action, Reducer, State } from '../types';
import type { AppAction } from './types';

function conf(state = { length: 0, time: 0 }, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

function status(state = 0, action: Action) {
  switch (action.type) {
    case TRAINING_STOP: {
      return 2;
    }
    case TRAINING_START: {
      return 1;
    }
    default:
      return state;
  }
}

function string(state = '', action: AppAction) {
  switch (action.type) {
    case TRAINING_START: {
      return action.string;
    }
    case UPDATE_STRING: {
      return action.string;
    }
    default:
      return state;
  }
}

function mistakes(state = 0, action: Action) {
  switch (action.type) {
    case TRAINING_START: {
      return 0;
    }
    case ON_MISTAKE: {
      return state + 1;
    }
    default:
      return state;
  }
}

function time(state = 0, action: Action) {
  switch (action.type) {
    case TRAINING_START: {
      return 0;
    }
    case UPDATE_TIME: {
      return state + 1;
    }
    default:
      return state;
  }
}

const combineReducer = combineReducers({
  conf,
  vars: combineReducers({
    status,
    string,
    mistakes,
    time,
  }),
});

const replaceState = reducer => (state: State | void, action: AppAction) => {
  if (action.type === REPLACE_STATE && action.state) {
    return action.state;
  }
  return reducer(state, action);
};

export default replaceState(combineReducer);
