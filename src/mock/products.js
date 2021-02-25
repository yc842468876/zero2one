import Mock from 'mockjs';
import api from '../services/api';
import { BaseURL_dev } from '../utils/config';

Mock.mock(BaseURL_dev + api.getProducList, (options) => {
  return Mock.mock({
    'list|20-50': [
      { 'id|+1': 1, name: '@cname', 'price|1-100': 100, 'onSale|1': true },
    ],
  });
});
