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

    handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };

 handleSubmit = event => {
    const { name, type, percentage, cost, volume, health } = this.state;
    const newEvent = { name, type, percentage, cost, volume, health };
    eventService
      .addEvent(newEvent)
      .then(data =>
        this.setState({
            result: "Drink added",
        }),
       ) 
       .catch(err =>
        this.setState({
          result: err.response.data.code,
        }),
      );
 };
  
 
 render(){
    const { result, name, type, percentage, cost, volume, health, drinkLabels, healthLabels } = this.state;
    






 }


 
}

export default withRouter(AddEvent);;
