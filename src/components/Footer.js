import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="app-footer">
        <Link className="link-add-event" to="/" />
        <Link className="link-calendar" to="/events" />
        <Link className="link-statistics" to="/" />
      </div>
    );
  }
}

export default Footer;
