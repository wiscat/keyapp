/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import Button from '../ui/Button';
import { start } from '../redux/actions';

type StartProps = {
  onStart: Function,
};

class Start extends React.PureComponent<StartProps> {
  onClickStart = () => {
    this.props.onStart();
  };

  render() {
    return (
      <div className="start">
        <Button title="Старт" onClick={this.onClickStart} />
      </div>
    );
  }
}

export default connect(null, {
  onStart: start,
})(Start);
