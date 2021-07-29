import { TEST_ACTION } from 'utils/types.utils';
import { storeAction } from 'interfaces/common.interface';

const initialState = {
  test: 'test',
  foo: 'bar',
};

const TestReducer = (state = initialState, action: storeAction) => {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, test: action.payload };
    default:
      return state;
  }
};

export default TestReducer;
