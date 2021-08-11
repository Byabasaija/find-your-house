import { Route, Switch, withRouter } from 'react-router-dom';
import React from 'react';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Houses from './containers/Houses';
import HouseDetails from './containers/HouseDetails';
import UserFavorites from './containers/UserFavorites';
// import Header from './components/Header';

function App() {
  const token = sessionStorage.getItem('token');
  const authenticatedUser = () => (
    <Switch>
      <Route exact path="/" component={Houses} />
      <Route exact path="/house/:id" component={HouseDetails} />
      <Route exact path="/my-favorites" component={UserFavorites} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );

  const notAuthenticated = () => (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );

  const renderRoutes = () => {
    if (token) {
      return authenticatedUser();
    }
    return notAuthenticated();
  };

  return (
    <div>
      { renderRoutes() }
    </div>
  );
}

export default withRouter(App);
