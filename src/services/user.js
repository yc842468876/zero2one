import { post } from '../utils/request';
import api from './api';

export const queryUserInfo = (data) => post(api.queryUserInfo, data);
