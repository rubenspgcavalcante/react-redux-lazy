import { TEST, TEST_CLEAR } from './index';

let intervalId = null;

export const triggerTest = interval => {
  let counter = 0;
  return dispatch =>
    (intervalId = setInterval(
      () =>
        dispatch({ type: TEST, payload: `Bar triggered ${counter++} times` }),
      interval,
    ));
};

export const clearTest = () => dispatch => {
  if (intervalId) {
    clearInterval(intervalId);
    dispatch({ type: TEST_CLEAR });
  }
};
