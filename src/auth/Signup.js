/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { registerUserAction } from '../api/api';
import './Login.css';

const Signup = ({ signUpUser, history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const handleSubmit = (e) => {
    const user = { username, password, password_confirmation };
    signUpUser(user);
    history.push('/');
    e.preventDefault();
  };

  return (

    <div className="limiter">

      <div className="container-login100 login-pg">
        <div className="wrap-login100 p-t-190 p-b-30">
          <form onSubmit={(e) => handleSubmit(e)} className="login100-form validate-form">
            <div className="form-group pb-3 wrap-input100 validate-input m-b-10">
              <input
                type="text"
                name="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="form-control p-2 input100"
              />
            </div>

            <div className="form-group pb-3 wrap-input100 validate-input m-b-10">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control p-2 input100"
              />
            </div>

            <div className="form-group pb-3 wrap-input100 validate-input m-b-10">
              <input
                type="password"
                name="password_confirmation"
                placeholder="Password confirmation"
                value={password_confirmation}
                onChange={(e) => setPassword_confirmation(e.target.value)}
                required
                className="form-control p-2 input100"
              />
            </div>

            <div className="container-login100-form-btn p-t-10">
              <button type="submit" className="login100-form-btn">Register</button>
            </div>
          </form>
          <div>
            <p className="text-center w-full">Already have an account? </p>
            <Link to="/" className="text-center w-full">
              {' '}
              <p>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (user) => {
    dispatch(registerUserAction(user));
  },
});

Signup.propTypes = {
  signUpUser: PropTypes.func,
};

Signup.defaultProps = {
  signUpUser: () => {},
};
export default connect(null, mapDispatchToProps)(Signup);
