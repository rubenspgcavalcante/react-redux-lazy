import React, { Suspense, PureComponent } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import lazyTest from './containers/lazyTest';

const appEl = document.createElement('div');
appEl.setAttribute('id', 'app');
document.body.appendChild(appEl);

class ActionSelector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { actionCreator: null };
  }

  selectActionCreator({ target }) {
    if (target.value) {
      this.setState({ actionCreator: target.value });
    }
  }

  render() {
    const { actionCreator } = this.state;
    const LazyTest = actionCreator ? lazyTest(actionCreator) : null;

    return (
      <>
        <select
          defaultValue={null}
          onChange={this.selectActionCreator.bind(this)}>
          <option />
          <option value="foo">Select Foo action creator</option>
          <option value="bar">Select Bar action creator</option>
        </select>
        {LazyTest ? (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyTest hello={'asdasd'} />
          </Suspense>
        ) : null}
      </>
    );
  }
}

render(
  <Provider store={store}>
    <ActionSelector />
  </Provider>,
  appEl,
);
