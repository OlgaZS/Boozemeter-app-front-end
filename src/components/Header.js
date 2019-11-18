import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';

class Header extends Component {
  render() {
    /* here we get auth data from withAuth HOC */
    const { isLoggedin, handleLogout, user } = this.props;

    return (
      <div className="app-header">
        <div className="app-header-content">
          <Link to="/" className="header-logo" />
          {/* if user is logged in, we render Log Out button
            if not, render Login button */}
          {isLoggedin ? (
            <>
              <Link to="/update" className="app-user-logo" />
              <div className="app-user-links">
                <div className="app-user-greeting">Hi, {user.username}</div>
                <button className="logout-btn" onClick={handleLogout}>
                  Log out
                </button>
              </div>
            </>
          ) : (
            <Link className="login-link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default withAuth(Header);
