import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import HouseDetails from './HouseDetails';
import Houses from './Houses';

const Home = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Houses} />
      <Route exact path="/house/:id" component={HouseDetails} />

    </Switch>
  </div>
);

export default Home;
