import { TEST, TEST_CLEAR } from '../actions';
import { combineReducers } from 'redux';

const rootReducer = (
  state = {
    test: null,
  },
  { type, payload },
) => {
  switch (type) {
    case TEST:
      return { ...state, test: payload };

    case TEST_CLEAR:
      return { ...state, test: null };

    default:
      return state;
  }
};

export default combineReducers({ app: rootReducer });
