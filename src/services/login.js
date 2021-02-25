import { post } from '../utils/request';
import api from './api';

export const login = (data) => post(api.login, data);
