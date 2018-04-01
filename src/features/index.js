/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import Widget from './components/Widget';
import { configureStore } from './redux/store';
import { reset } from './redux/actions';

import './styles.css';

import type { Store, MainProps } from './types';

class Index extends React.PureComponent<MainProps> {
  props: MainProps;
  store: Store;

  componentWillMount() {
    this.store = configureStore(this.props);
  }

  componentDidUpdate() {
    this.store.dispatch(reset(this.props));
  }

  render() {
    return (
      <Provider store={this.store}>
        <Widget {...this.props} />
      </Provider>
    );
  }
}

export default Index;
