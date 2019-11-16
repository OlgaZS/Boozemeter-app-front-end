import React, { Component } from 'react';
import Calendar from 'react-day-picker';
import { withAuth } from '../Context/AuthContext';
import eventService from '../services/eventService';
import EventListItem from '../components/EventListItem';

class EventsView extends Component {
  state = {
    events: [],
    date: new Date().getTime(),
  };

  handleChange = day => {
    /* converting day (Date object) to milliseconds */
    const date = day.getTime();
    this.setState({
      date: date,
    });

    eventService.getEventsByDate(date).then(data => this.setState({ events: data }));
    console.log('eventsView: date in ms ', date);
  };

  //./images/jfjf.jpg como pasar los imagenes

  // eslint-disable-next-line class-methods-use-this

  componentDidMount() {
    const { date } = this.state;

    eventService.getEventsByDate(date).then(data => this.setState({ events: data }));
  }

  render() {
    const { date } = this.state;

    return (
      <div className="events-list-screen">
        <div className="events-list-calendar">
          <Calendar selectedDays={new Date(date)} onDayClick={this.handleChange} />
        </div>
        <div className="events-list-data">
          {/* div.events-list-data-inner is needed to set scrollbar inside div.events-list-data */}
          <div className="events-list-data-inner">
            {/* Mapping all events, each event renders EventListItem component */}
            {this.state.events.map(item => {
              return <EventListItem eventDate={date} data={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(EventsView);
