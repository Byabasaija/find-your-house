/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import UserFavorites from './UserFavorites';
import HouseDetails from './HouseDetails';
import Houses from './Houses';

const Home = () => (

  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Houses} />
      <Route exact path="/house/:id" component={HouseDetails} />
      <Route exact path="/my-favorites" component={UserFavorites} />

    </Switch>
  </div>
);

export default Home;
