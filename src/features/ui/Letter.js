/* @flow */

import React from 'react';

type LetterProps = {
  cls?: string,
  char: string,
};

class Letter extends React.PureComponent<LetterProps> {
  render() {
    const { char, cls } = this.props;

    return (
      <div className={`letter ${cls || ''}`}>
        {char}
      </div>
    );
  }
}

export default Letter;
