/* eslint-disable react/prop-types */
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import React from 'react';
import Houses from '../containers/Houses';
import Login from '../containers/Login';

const Routes = ({ isLogged }) => {
  const renderRoutes = () => {
    if (isLogged === true) {
      return <Route path="/" render={() => <Houses />} />;
    }
    return <Route path="/" render={() => <Login />} />;
  };
  return (
    <Switch>
      {renderRoutes()}
    </Switch>
  );
};
const mapStateToProps = (state) => ({
  isLogged: state.login,
});
export default connect(mapStateToProps)(Routes);
