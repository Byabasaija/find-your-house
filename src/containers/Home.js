import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Houses from './Houses';

const Home = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Houses} />
    </Switch>
  </div>
);

export default Home;
