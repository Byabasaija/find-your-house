/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router';
// // import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { login } from '../actions/index';
import logoutUserAction from '../actions/logoutUser';

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUserAction());
    history.push('/');
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <span className="navbar-brand text-dark pg-title" href="#">Houses</span>
        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-dark" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div>
            <Link to="/my-favorites" className="btn btn-primary pl-3">
              <button type="button" className="text-white">
                My Favorites
              </button>
            </Link>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleLogout()}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// const mapDispatchToprops = (dispatch) => ({
//   login: (isLogged) => dispatch(login(isLogged)),
// });

export default (withRouter(Header));
