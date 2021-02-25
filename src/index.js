import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { mainRoutes } from './routes';

// 开发环境引用 mock 代理接口
if (process.env.NODE_ENV === 'development') {
  require('./mock/index.js');
}

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <Switch>
          <Route
            path="/admin"
            render={(routeProps) => <App {...routeProps} />}
          />
          {mainRoutes.map((route) => {
            return <Route key={route.path} {...route} />;
          })}
          <Redirect to="/admin/home" form="/" exact />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
