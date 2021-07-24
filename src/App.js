/* eslint-disable react/prop-types */
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import React from 'react';
import Home from './containers/Home';
// import Signup from './auth/Signup';
import Login from './auth/Login';

function App({ isLogged }) {
  return (
    <Switch>
      { isLogged ? (
        <Route path="/" render={() => <Home />} />
      ) : (
        <Route exact path="/" render={() => <Login />} />
      )}

    </Switch>
  );
}

const mapStateToProps = ({ login: { isLogged } }) => ({
  isLogged,
});
export default connect(mapStateToProps)(App);
