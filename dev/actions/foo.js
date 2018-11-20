import { TEST, TEST_CLEAR } from './index';

let timeoutId = null;

export const triggerTest = timeout => dispatch =>
  (timeoutId = setTimeout(
    () => dispatch({ type: TEST, payload: 'Foo triggered' }),
    timeout,
  ));

export const clearTest = () => dispatch => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
    dispatch({ type: TEST_CLEAR });
  }
};
