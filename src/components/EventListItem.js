import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getDrinkImagePath, getHealthImagePath } from '../helpers/getImagePath';

class EventListItem extends Component {
  render() {
    /* data prop is passed from CalendarView */
    const { data } = this.props;
    const { drink, cost, volume, health } = data;

    return (
      <Link to={`/event/${data._id}`} className="event-list-item">
        <div className="event-drink">
          <img src={getDrinkImagePath(drink.type)} style={{ height: '53px' }} alt="" />
          <span>{drink.name}</span>
        </div>
        <div className="event-volume">
          <span className="event-numeric">{(volume / 1000).toFixed(1)}</span>
          <span>litres</span>
        </div>
        <div className="event-cost">
          <span className="event-numeric">{(cost / 100).toFixed(1)}</span>
          <span>euro</span>
        </div>
        <div className="event-health">
          <img src={getHealthImagePath(health)} style={{ height: '50px' }} alt="" />
          <span>{health}</span>
        </div>
      </Link>
    );
  }
}

export default withRouter(EventListItem);
