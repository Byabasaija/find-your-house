import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Auth = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />

    </Switch>
  </BrowserRouter>
);

export default Auth;
