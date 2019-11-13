import React, { Component } from 'react';
import Calendar from 'react-day-picker';

class BoozeCalendar extends Component {
  newDate = res => {
    console.log('calendar: ', res);
  };

  render() {
    const { date, onChange } = this.props;
    // return <Calendar selectedDays={new Date(date)} onDayClick={this.newDate} />;
    return <Calendar selectedDays={new Date(date)} onDayClick={onChange} />;
  }
}

export default BoozeCalendar;
