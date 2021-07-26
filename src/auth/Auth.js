import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Auth = () => (
  <div>
    <Login />
    <Switch>
      <Route exact path="/" render={() => <Signup />} />

    </Switch>
  </div>
);

export default Auth;
