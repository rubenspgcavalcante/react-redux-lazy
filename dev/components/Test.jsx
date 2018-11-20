import React, { PureComponent } from "react";

export default class Test extends PureComponent {
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
