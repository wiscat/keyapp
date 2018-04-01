/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import Info from './Info';
import Button from '../ui/Button';
import { start } from '../redux/actions';

type ResultsProps = {
  onStart: Function,
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

export default connect(null, {
  onStart: start,
})(Results);
