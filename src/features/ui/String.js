/* @flow */

import React from 'react';
import Letter from './Letter';

type StringProps = {
  cls?: string,
  string: string,
};

class String extends React.PureComponent<StringProps> {
  renderString = () => {
    const { string } = this.props;
    const letters = [];
    for (let i = 0; i < string.length; i += 1) {
      letters.push(<Letter key={i} char={string.charAt(i)} cls="string__letter" />);
    }
    return letters;
  };

  render() {
    const { cls } = this.props;

    return (
      <div className={`string ${cls || ''}`}>
        {this.renderString()}
      </div>
    );
  }
}

export default String;
