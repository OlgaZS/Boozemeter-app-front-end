import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import eventService from '../services/eventService';
import { getFormattedDateString } from '../helpers/getDateTime';
import { getDrinkImagePath, getHealthImagePath } from '../helpers/getImagePath';

class EventView extends Component {
  state = {
    eventData: {},
  };

  componentDidMount() {
    const { eventId } = this.props.match.params;

    eventService.getEvent(eventId).then(data => this.setState({ eventData: data }));
  }

  render() {
    const { date, drink, cost, volume, health, _id } = this.state.eventData;
    if (!_id) return null;
    return (
      <div className="event-detail">
        <div className="event-detail-inner">
          <span className="event-detail-date">
            <Link to="/events">
              <img src={process.env.PUBLIC_URL + '/images/back.png'} className="back" alt="" width="40" />
            </Link>
            <span>{getFormattedDateString(new Date(date).getTime())}</span>
          </span>
          <div className="event-detail-drink">
            <div>
              <img src={getDrinkImagePath(drink.type)} style={{ height: '53px' }} alt="" />
            </div>
            <span>{drink.name}</span>
          </div>
          <div className="event-detail-volume">
            <span className="event-detail-numeric">{(volume / 1000).toFixed(1)}</span>
            <span>litres</span>
          </div>
          <div className="event-detail-percent">
            <span>{parseInt(drink.percentage)}%</span>
            <span>alcohol</span>
          </div>
          <div className="event-detail-cost">
            <span>{(cost / 100).toFixed(1)}</span>
            <span>euro</span>
          </div>
          <div className="event-detail-health">
            <div>
              <img src={getHealthImagePath(health)} style={{ height: '50px' }} alt="" />
            </div>
            <span>{health}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default EventView;
