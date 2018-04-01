/* @flow */

import React from 'react';

type ButtonProps = {
  cls?: string,
  title: string,
  onClick: Function,
};

class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { title, onClick, cls } = this.props;

    return (
      <button className={`button ${cls || ''}`} onClick={onClick}>
        {title}
      </button>
    );
  }
}

export default Button;
