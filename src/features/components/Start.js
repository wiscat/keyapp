/* @flow */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../ui/Button';
import { start } from '../redux/actions';

import type { Dispatch } from '../types';

type StartProps = {
  onStart: () => void,
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onStart: bindActionCreators(start, dispatch),
});

export default connect(null, mapDispatchToProps)(Start);
