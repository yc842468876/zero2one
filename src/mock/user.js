import Mock from 'mockjs';
import api from '../services/api';
import { BaseURL_dev } from '../utils/config';

Mock.mock(BaseURL_dev + api.queryUserInfo, (options) => {
  const { body } = options;
  const data = body ? JSON.parse(body) : {};
  if (data.token) {
    return Mock.mock({
      success: true,
      message: '登陆成功',
      userInfo: {
        name: '@cname',
        avatar: '@dataImage(200x200, #00405d, #FFF, avartar)',
      },
    });
  } else {
    return {};
  }
});
