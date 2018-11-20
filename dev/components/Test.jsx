import React, { PureComponent } from 'react';
import { func, string } from 'prop-types';

export default class Test extends PureComponent {
  propTypes = {
    triggerTest: func,
    clearTest: func,
    test: string,
  };

  componentDidMount() {
    this.props.triggerTest(1000);
  }

  componentWillUnmount() {
    this.props.clearTest();
  }

  render() {
    return <div>{this.props.test}</div>;
  }
}
