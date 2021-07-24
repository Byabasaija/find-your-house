/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { withRouter } from 'react-router';
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
    <div className="login-div">
      <div>
        <h2 className="login-text">Login</h2>
        <p className="login-text">Hey there! Welcome to back</p>
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            placeholder="Name..."
            name="username"
            required
            onChange={(e) => handleChangeUsername(e)}
            value={username}
          />
          <input
            placeholder="Password..."
            name="password"
            required
            onChange={(e) => handleChangePassword(e)}
            value={password}
          />
          <button type="submit" onSubmit={(e) => handleSubmit(e)}>Log in</button>
        </form>
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
