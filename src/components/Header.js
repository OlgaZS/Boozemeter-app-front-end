import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="/">
          <img src="/images/home.jpg" alt="home"></img>
        </a>
      </div>
    );
  }
}

export default Header;
