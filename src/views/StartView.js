import React, { Component } from 'react';

class StartView extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="start-view">
        <div className="start-view-inner">
          <div className="start-text">App to measure your drinks, money spent and health</div>
          <img src={process.env.PUBLIC_URL + '/images/start.png'} className="start" alt="" />
        </div>
      </div>
    );
  }
}

export default StartView;
