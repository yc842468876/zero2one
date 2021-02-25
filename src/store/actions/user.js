import { SET_USER_INFO } from '../actions_type/user';
import { queryUserInfo as queryUserInfo_fetch } from '../../services/user';

// 设置 userInfo
export const setUserInfo = (payload) => ({
  type: SET_USER_INFO,
  payload: {
    userInfo: payload.userInfo,
  },
});

// 获取 userInfo
export const queryUserInfo = (payload) => async (dispatch) => {
  const res = await queryUserInfo_fetch(payload);
  // 调用设置 userInfo action
  dispatch(setUserInfo({ userInfo: res.userInfo }));
};
