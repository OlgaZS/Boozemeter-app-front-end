import React, { Component } from 'react';
import AddEvent from '../components/AddEvent';

class AddEventView extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="add-event-view">
        <div className="add-event-view-inner">
          <div className="view-heading">Add new drink</div>
          <AddEvent />
        </div>
      </div>
    );
  }
}

export default AddEventView;
