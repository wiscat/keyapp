/* @flow */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card, { CardActions, CardContent } from 'material-ui/Card';
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
      <Card className="results">
        <CardContent>
          <Info />
        </CardContent>
        <CardActions>
          <Button title="Заново" onClick={this.onClickRestart} />
        </CardActions>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onStart: bindActionCreators(start, dispatch),
});

export default connect(null, mapDispatchToProps)(Results);
