/* @flow */

import React from 'react';
import Button from 'material-ui/Button';

type ButtonProps = {
  title: string,
  onClick: () => void,
};

class AppButton extends React.PureComponent<ButtonProps> {
  render() {
    const { title, onClick } = this.props;

    return (
      <Button variant="raised" color="primary" onClick={onClick}>
        {title}
      </Button>
    );
  }
}

export default AppButton;
