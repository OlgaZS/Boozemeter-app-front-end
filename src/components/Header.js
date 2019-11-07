export default Header;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';

class Header extends Component {
  render() {
    const { isLoggedin, handleLogout } = this.props;

    return (
      <div className='app-header'>
        <div className="app-title"><Link to="/"> Boozemeter </Link></div>
        {isLoggedin ? (
          <button className='logout-btn' onClick={handleLogout}>Log out</button>
        ) : (
          <Link className='login-link' to="/login">Login</Link>
        )}

      </div>
    );
  }
}

export default withAuth(Header);