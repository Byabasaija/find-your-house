/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import loginUserAction from '../actions/loginUser';
import './Login.css';

const Login = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    const user = { username, password };
    loginUser(user);
    e.preventDefault();
  };

  return (
    <div className="limiter">
      <div className="container-login100 login-pg">
        <div className="wrap-login100 p-t-190 p-b-30">
          <div className="p-5">
            <h2 className="login-text login100-form-title p-t-20 p-b-45 pb-3">Login</h2>
            <p className="login-text login100-form-text">Hey there! Welcome to back</p>
          </div>
          <div>
            <form onSubmit={(e) => handleSubmit(e)} className="login100-form validate-form">
              <div className="form-group pb-3 wrap-input100 validate-input m-b-10">
                <input
                  placeholder="Name..."
                  name="username"
                  required
                  onChange={(e) => handleChangeUsername(e)}
                  value={username}
                  className="form-control p-2 input100"
                />
              </div>
              <div className="form-group pb-3 wrap-input100 validate-input m-b-10">
                <input
                  placeholder="Password..."
                  name="password"
                  required
                  onChange={(e) => handleChangePassword(e)}
                  value={password}
                  className="form-control p-2 input100"
                />
              </div>
              <div className="container-login100-form-btn p-t-10">
                <button type="submit" onSubmit={(e) => handleSubmit(e)} className="login100-form-btn">Log in</button>
              </div>
            </form>

            <div className="text-center w-full">
              <Link className="text-dark" to="/">
                Create new account
                <i className="fa fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUserAction(user)),
});
export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Login));
