import { get, post } from '../utils/request';

/**
 * 用户登录
 * @param {*} data 用户登录数据
 */
export function loginApi(data) {
  return post('/api/login', data);
}
