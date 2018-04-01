/* @flow */

import type { State } from '../types';

export const confSelector = (state: State) => state.conf;
export const statusSelector = (state: State) => state.vars.status;
export const timeSelector = (state: State) => state.vars.time;
export const stringSelector = (state: State) => state.vars.string;
export const mistakesSelector = (state: State) => state.vars.mistakes;
