/* @flow */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Info from './Info';
import Button from '../ui/Button';
import String from '../ui/String';
import { stop, updateTime, updateString, mistake } from '../redux/actions';
import { stringSelector } from '../redux/selectors';

import type { Dispatch } from '../types';

type TrainingProps = {
  string: string,
  onMistake: () => void,
  onStop: () => void,
  onUpdateTime: () => void,
  onUpdateString: (string) => void,
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
      <Card className="training">
        <CardContent>
          <Info />
          <String string={string.slice(0, 40)} cls="training__string" />
        </CardContent>
        <CardActions>
          <Button title="Закончить" onClick={this.onClickStop} />
        </CardActions>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onMistake: bindActionCreators(mistake, dispatch),
  onStop: bindActionCreators(stop, dispatch),
  onUpdateTime: bindActionCreators(updateTime, dispatch),
  onUpdateString: bindActionCreators(updateString, dispatch),
});

export default connect(state => ({
  string: stringSelector(state),
}), mapDispatchToProps)(Training);
