import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { adminRoutes } from './routes';
import AdminLayout from './components/AdminLayout';
import { isLogin } from './utils/auth';
import './App.css';

function App(props) {
  return isLogin() ? (
    <AdminLayout>
      <Switch>
        {adminRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(routeProps) => {
                return <route.component {...routeProps} />;
              }}
            />
          );
        })}
        <Redirect from="/admin" exact to={adminRoutes[0].path} />
        <Redirect to="/404" />
      </Switch>
    </AdminLayout>
  ) : (
    <Redirect to="/login" />
  );
}

export default App;
