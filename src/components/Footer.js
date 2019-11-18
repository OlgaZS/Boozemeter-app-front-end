import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="app-footer">
        <div className="app-footer-content">
          <Link className="link-add-event" to="/add-event" />
          <Link className="link-calendar" to="/events" />
          <Link className="link-statistics" to="/statistics" />
        </div>
      </div>
    );
  }
}

export default Footer;
