/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { Route, Switch } from 'react-router-dom';

import React from 'react';
import Home from './containers/Home';
import Signup from './auth/Signup';
import Login from './auth/Login';
// import Auth from './auth/Auth';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  );
}

export default App;
