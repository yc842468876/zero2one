import { get, post } from '../utils/request';

const data = [
  {
    id: 1,
    name: '苹果',
    price: 10,
  },
  {
    id: 2,
    name: '香蕉',
    price: 20,
  },
  {
    id: 3,
    name: '火腿',
    price: 30,
  },
  {
    id: 4,
    name: '灰机',
    price: 40,
  },
  {
    id: 5,
    name: '大炮',
    price: 50,
  },
  {
    id: 6,
    name: '航母',
    price: 60,
  },
];

export function getDataList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}
