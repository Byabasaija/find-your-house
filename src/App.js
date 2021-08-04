/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import React from 'react';
import { toastr } from 'react-redux-toastr';
import Home from './containers/Home';
import Auth from './auth/Auth';

function App({ isLogged }) {
  const message = useSelector((state) => state.login.user.message);
  const token = localStorage.getItem('token');
  const authenticatedUser = () => (
    <Switch>
      <Route path="/" render={() => <Home />} />
    </Switch>
  );

  const notAuthenticated = () => (
    <Switch>
      { isLogged ? (
        <Route path="/" render={() => <Home />} />
      ) : (
        <Route exact path="/" render={() => <Auth />} />

      )}
    </Switch>
  );

  const renderRoutes = () => {
    if (token) {
      return authenticatedUser();
    }
    return notAuthenticated();
  };

  const renderMessage = () => {
    if (message === undefined) {
      toastr.error('Error', 'Invalid credetials');
    } else {
      toastr.success('Success', `${message}`);
    }
  };

  return (
    <div>
      { renderRoutes() }
      { renderMessage()}
    </div>
  );
}
App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  isLogged: state.login.user.isLogged,
});
export default connect(mapStateToProps)(App);
