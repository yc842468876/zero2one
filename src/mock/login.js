import Mock from 'mockjs';
import api from '../services/api';
import { BaseURL_dev } from '../utils/config';

Mock.mock(BaseURL_dev + api.login, (options) => {
  const { body } = options;
  const data = body ? JSON.parse(body) : {};
  if (data.username === 'admin' && data.password === 'admin') {
    return Mock.mock({
      success: true,
      message: '登陆成功',
      userInfo: {
        name: '@cname',
        avartar: '@dataImage(200x200, #00405d, #FFF, avartar)',
        token: '@word(16)',
      },
    });
  } else {
    return {
      success: false,
      message: '账号或密码错误',
    };
  }
});
