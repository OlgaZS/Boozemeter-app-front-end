import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class EventListItem extends Component {
  render() {
    /* data prop is passed from EventsView */
    const { eventDate, data } = this.props;
    const { drink, cost, volume, health } = data;

    return (
      <Link to={'/event/' + data._id} className="">
        <span className="">{eventDate}</span>
        <div className="">
          <span>{drink.name}</span>
        </div>
        <div className="">
          <span className="">{(volume / 1000).toFixed(1)}</span>
          <span>litres</span>
        </div>
        <div className="">
          <span className="">{(cost / 100).toFixed(2)}</span>
          <span>euro</span>
        </div>
        <div className="">
          <span>{health}</span>
        </div>
      </Link>
    );
  }
}

export default withRouter(EventListItem);
