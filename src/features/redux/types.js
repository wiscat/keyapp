/* @flow */

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
}

export type GetState = () => State;
