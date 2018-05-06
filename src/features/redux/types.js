/* @flow */
import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';
import {
  TRAINING_START,
  TRAINING_STOP,
  REPLACE_STATE,
  UPDATE_STATUS,
  UPDATE_STRING,
  UPDATE_TIME,
  ON_MISTAKE,
} from './actions';

export type Conf = {
  length: number,
  time: number,
};

export type State = {
  conf: Conf,
  vars: {
    status: number,
    time: number,
    string: string,
    mistakes: number,
  },
};

export type GetState = () => State;

export type AppAction =
  { type: typeof TRAINING_START, string: string } |
  { type: typeof REPLACE_STATE, state: State } |
  { type: typeof TRAINING_STOP } |
  { type: typeof UPDATE_STATUS } |
  { type: typeof UPDATE_STRING, string: string } |
  { type: typeof UPDATE_TIME } |
  { type: typeof ON_MISTAKE };
export type Action = { type: string };

export type Dispatch =
  & ReduxDispatch<Action>
  & Thunk<Action>;
export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

export type Store = ReduxStore<State, Action, Dispatch>;
export type Reducer<S, A> = (state: S, action: A) => S;
