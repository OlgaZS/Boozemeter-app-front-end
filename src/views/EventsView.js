import React, { Component } from 'react';
import BoozeCalendar from '../components/BoozeCalendar';
import eventService from '../services/eventService';

class EventsView extends Component {
  state = {
    date: new Date().getTime(),
    // define event array[]
  };

  handleChange = day => {
    this.setState({
      date: day.getTime(),
    });
  };

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    eventService.getEvents().then(data => console.log(data));
  }

  render() {
    const { date } = this.state;

    return (
      <div className="events-list-calendar">
        <BoozeCalendar onClick={() => this.handleChange} date={date} />
      </div>
    );
  }
}

export default EventsView;
