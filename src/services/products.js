import { post } from '../utils/request';
import api from './api';

export const getDataList = (params) => post(api.getProducList);
