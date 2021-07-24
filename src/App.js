/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import React from 'react';
import Home from './containers/Home';
// import Signup from './auth/Signup';
import Login from './auth/Login';

function App({ logged_in }) {
  return (
    <Switch>
      { logged_in ? (
        <Route path="/" render={() => <Home />} />
      ) : (
        <Route exact path="/" render={() => <Login />} />
      )}

    </Switch>
  );
}

const mapStateToProps = (state) => ({
  logged_in: state.login.user.logged_in,
});
export default connect(mapStateToProps)(App);
