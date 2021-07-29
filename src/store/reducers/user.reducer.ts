import { GET_USER } from 'utils/types.utils';

const initialState = {
  user: {},
  users: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
