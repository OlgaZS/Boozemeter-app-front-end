import React, { Component } from 'react';
import { withAuth } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handleLogin({
      username,
      password,
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="login-screen">
        <div className="login-screen-inner">
          <div className="login-screen-content">
            <form onSubmit={this.handleFormSubmit}>
              <label className="username-label">Username:</label>
              <input type="text" name="username" value={username} onChange={this.handleChange} />
              <label>Password:</label>
              <input type="password" name="password" value={password} onChange={this.handleChange} />
              <input type="submit" value="Login" />
            </form>
            <p className="switch-auth">
              Don't have an account? <br />
              <Link to={'/signup'}>Signup</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
