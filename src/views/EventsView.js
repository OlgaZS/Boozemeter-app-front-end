import React, { Component } from 'react';
import BoozeCalendar from '../components/BoozeCalendar';

class EventsView extends Component {
  render() {
    return (
      <div className="events-list-calendar">
        <BoozeCalendar />
      </div>
    );
  }
}

export default EventsView;
