import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import eventService from '../services/eventService';

class AddEvent extends Component {
  state = {
    result: '',
    name: '',
    type: '',
    percentage: '',
    cost: '',
    volume: '',
    health: '',
    drinkLabels: [],
    healthLabels: [],
  };

  async componentDidMount() {
    await eventService.getDrinkLabels().then(data =>
      this.setState({
        drinkLabels: data,
        type: 'Beer',
      }),
    );

    await eventService.getHealthLabels().then(data =>
      this.setState({
        healthLabels: data,
        type: 'All is fine',
      }),
    );
  }
}

export default withRouter(AddEvent);
