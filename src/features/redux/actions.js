/* @flow */
import { initState } from './store';
import { randomStr } from '../lib';
import { confSelector, timeSelector } from './selectors';
import type { Dispatch, GetState, MainProps } from '../types';

export const REPLACE_STATE = 'REPLACE_STATE';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const UPDATE_STRING = 'UPDATE_STRING';
export const UPDATE_TIME = 'UPDATE_TIME';
export const ON_MISTAKE = 'ON_MISTAKE';
export const TRAINING_START = 'TRAINING_START';
export const TRAINING_STOP = 'TRAINING_STOP';

export const stop = () => ({
  type: TRAINING_STOP,
});

export const start = () => (dispatch: Dispatch, getState: GetState) => {
  const state = getState();
  dispatch({
    type: TRAINING_START,
    string: randomStr(confSelector(state).length),
  });
};

export const reset = (props: MainProps) => (dispatch: Dispatch) => {
  dispatch({
    type: REPLACE_STATE,
    state: initState(props),
  });
};

export const updateString = (string: string) => (dispatch: Dispatch) => {
  dispatch({
    type: UPDATE_STRING,
    string,
  });
  if (!string) {
    dispatch(stop());
  }
};

export const mistake = () => ({
  type: ON_MISTAKE,
});

export const updateTime = () => (dispatch: Dispatch, getState: GetState) => {
  const state = getState();
  const conf = confSelector(state);
  const currentTime = timeSelector(state);
  dispatch({
    type: UPDATE_TIME,
  });
  if (currentTime >= conf.time - 1) {
    dispatch(stop());
  }
};
