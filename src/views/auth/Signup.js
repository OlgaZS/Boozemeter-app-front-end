import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../Context/AuthContext';

class Signup extends Component {
  state = {
    username: '',
    usernameErr: '',
    password: '',
    passwordErr: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;

    const errors = {};

    if (username.length < 5) {
      errors.usernameErr = 'More than 5 symbols required';
    } else {
      errors.usernameErr = '';
    }

    if (password.length < 5) {
      errors.passwordErr = 'More than 5 symbols required';
    } else {
      errors.passwordErr = '';
    }

    if (errors.usernameErr || errors.passwordErr) {
      this.setState(errors);
    } else {
      this.setState(errors);

      this.props.handleSignup({
        username,
        password,
      });
    }
  };

  render() {
    const { username, usernameErr, password, passwordErr } = this.state;
    return (
      <div className="signup-screen">
        <div className="signup-screen-inner">
          <div className="signup-screen-content">
            <form onSubmit={this.handleFormSubmit}>
              <label className="username-label">Username:</label>
              <input type="text" name="username" value={username} onChange={this.handleChange} />
              <div className="field-error">{usernameErr}</div>
              <label className="password-label">Password:</label>
              <input type="password" name="password" value={password} onChange={this.handleChange} />
              <div className="field-error">{passwordErr}</div>
              <button type="submit" className="signup-submit-btn">
                Signup
              </button>
            </form>

            <p className="switch-auth">
              Already have account? <br />
              <Link to={'/login'}> Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);
