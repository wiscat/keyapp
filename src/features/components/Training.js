/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import Info from './Info';
import Button from '../ui/Button';
import String from '../ui/String';
import { stop, updateTime, updateString, mistake } from '../redux/actions';
import { stringSelector } from '../redux/selectors';

type TrainingProps = {
  string: string,
  onMistake: Function,
  onStop: Function,
  onUpdateTime: Function,
  onUpdateString: Function,
};

class Training extends React.PureComponent<TrainingProps> {
  timer: IntervalID;

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp);
    this.timer = setInterval(this.onTick, 1000);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUp);
    clearInterval(this.timer);
  }

  onKeyUp = (e: KeyboardEvent) => {
    const { string, onUpdateString, onMistake } = this.props;
    if (e.key === string[0]) {
      onUpdateString(string.slice(1));
    } else {
      onMistake();
    }
  };

  onTick = () => {
    this.props.onUpdateTime();
  };

  onClickStop = () => {
    this.props.onStop();
  };

  render() {
    const { string } = this.props;

    return (
      <div className="training">
        <Info />
        <String string={string.slice(0, 10)} cls="training__string" />
        <Button title="Закончить" onClick={this.onClickStop} />
      </div>
    );
  }
}

export default connect(state => ({
  string: stringSelector(state),
}), {
  onMistake: mistake,
  onStop: stop,
  onUpdateTime: updateTime,
  onUpdateString: updateString,
})(Training);
