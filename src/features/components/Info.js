/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { secondsToHHMMSS } from '../lib';
import { stringSelector, timeSelector, mistakesSelector, confSelector } from '../redux/selectors';

import type { Conf } from '../types';

type InfoProps = {
  string: string,
  time: number,
  mistakes: number,
  conf: Conf,
};

class Info extends React.PureComponent<InfoProps> {
  render() {
    const {
      string, time, mistakes, conf,
    } = this.props;

    return (
      <div className="info">
        <div className="info__row">
          Осталось времени: {secondsToHHMMSS(conf.time - time)}
        </div>
        <div className="info__row">
          Прошло времени: {secondsToHHMMSS(time)}
        </div>
        <div className="info__row">
          Кол-во ошибок: {mistakes}
        </div>
        <div className="info__row">
          Всего символов: {conf.length}
        </div>
        <div className="info__row">
          Осталось символов: {string.length}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  string: stringSelector(state),
  time: timeSelector(state),
  mistakes: mistakesSelector(state),
  conf: confSelector(state),
}))(Info);
