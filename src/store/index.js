import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * 动态加载 reducers 文件
 * 目标文件夹
 * 是否查找子集 true | false
 * 正则匹配
 */
const files = require.context('./reducers', false, /\.js$/);
const reducers = {};
files.keys().forEach((key) => {
  const filename = key.replace(/(\.\/|\.js)/g, '');
  reducers[filename] = files(key)['default'];
});

const rootReducer = combineReducers(reducers);

export default createStore(rootReducer, compose(applyMiddleware(...[thunk])));
