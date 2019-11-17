import React, { Component } from 'react';
import BoozeStatistics from '../components/BoozeStatistics';

class StatisticsView extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="statistics-view">
        <div className="statistics-view-inner">
          <BoozeStatistics type="user" />
          <BoozeStatistics type="group" />
        </div>
      </div>
    );
  }
}

export default StatisticsView;
