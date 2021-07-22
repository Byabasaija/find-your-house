/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router';
import { login } from '../actions/index';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(true);
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="login-div">
        <div>
          <h2 className="login-text">Login</h2>
          <p className="login-text">Hey there! Welcome to back</p>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Name..."
              name="name"
              required
              onChange={(e) => this.handleChange(e)}
              value={name}
            />
            <button type="submit" onSubmit={this.handleSubmit}>Log in</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  login: (isLogged) => dispatch(login(isLogged)),
});
export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Login));
