import React, { Component } from 'react';
import eventService from '../services/eventService';

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
        <span>{drink.name}</span>
        <br></br>
        <span className="">{(cost / 100).toFixed(2)}</span>
        <span>euro</span>
        <br></br>
        <span className="">{(volume / 1000).toFixed(1)}</span>
        <br></br>
        <span>{health}</span>
      </div>
    );
  }
}

export default EventView;
