import React, { Component } from 'react';

import TrainingWidget from './features/index';

class DemoApp extends Component {
  render() {
    return (
      <div className="demo-app">
        <TrainingWidget
          time={60}
          length={100}
        />
      </div>
    );
  }
}

export default DemoApp;
