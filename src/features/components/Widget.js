/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { statusSelector } from '../redux/selectors';
import Start from './Start';
import Training from './Training';
import Results from './Results';
import type { MainProps } from '../types';

type WidgetProps = {
  status: number,
} & MainProps;

class Widget extends React.PureComponent<WidgetProps> {
  renderWidget = () => {
    const { status } = this.props;

    if (!status) {
      return <Start />;
    }

    if (status === 1) {
      return <Training />;
    }

    return <Results />;
  };

  render() {
    return (
      <div className="widget">
        {this.renderWidget()}
      </div>
    );
  }
}

export default connect(state => ({
  status: statusSelector(state),
}))(Widget);
