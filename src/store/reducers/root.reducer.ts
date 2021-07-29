import { combineReducers } from 'redux';
import testReducer from 'store/reducers/test.reducer';
import UserReducer from './user.reducer';

export default combineReducers({
  test: testReducer,
  user: UserReducer
});
