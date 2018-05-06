/* @flow */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Info from './Info';
import Button from '../ui/Button';
import { start } from '../redux/actions';

import type { Dispatch } from '../types';

type ResultsProps = {
  onStart: () => void,
};

class Results extends React.PureComponent<ResultsProps> {
  onClickRestart = () => {
    this.props.onStart();
  };

  render() {
    return (
      <div className="results">
        <Info />
        <Button cls="results__button" title="Заново" onClick={this.onClickRestart} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onStart: bindActionCreators(start, dispatch),
});

export default connect(null, mapDispatchToProps)(Results);
