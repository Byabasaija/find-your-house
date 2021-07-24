/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import { Switch, Route, Link } from 'react-router-dom';
import registerUserAction from '../actions/registerUser';
import Login from './Login';

const Signup = ({ signUpUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordCof = (e) => {
    setPassword_confirmation(e.target.value);
  };

  const handleSubmit = (e) => {
    const user = { username, password, password_confirmation };
    signUpUser(user);
    e.preventDefault();
  };

  return (

    <div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => handleChangeUsername(e)}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => handleChangePassword(e)}
          required
        />

        <input
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          value={password_confirmation}
          onChange={(e) => handleChangePasswordCof(e)}
          required
        />

        <button type="submit">Register</button>
      </form>
      <div>
        <p>Already have an account? </p>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
        <Link to="/login">
          {' '}
          <p>LOGIN</p>
        </Link>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   response: state.userReducer.response,
// });

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
