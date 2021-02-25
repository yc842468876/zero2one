import { SET_USER_INFO } from '../actions_type/user';
const initState = { userInfo: {} };

const user = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      const { userInfo } = action.payload;
      return { ...state, userInfo };
    default:
      return state;
  }
};

export default user;
