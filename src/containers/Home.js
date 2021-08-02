/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

import Houses from './Houses';

const Home = ({ isLogged }) => {
  if (isLogged === false) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Houses} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  logged_in: state.login.isLogged,
});
export default connect(mapStateToProps)(Home);
