import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import notice from './reducers/notice';
import productList from './reducers/productList';

const rootReducer = combineReducers({
  notice, // 消息通知
  productList, // 商品列表
});

export default createStore(rootReducer, compose(applyMiddleware(...[thunk])));
