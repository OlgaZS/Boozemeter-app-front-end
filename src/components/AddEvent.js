import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import eventService from '../services/eventService';

class AddEvent extends Component {
  state = {
    result: '',
    date: null,
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
        health: 'All is fine',
      }),
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, type, percentage, cost, volume, health } = this.state;
    const newEvent = { name, type, percentage, cost, volume, health };
    eventService
      .addEvent(newEvent)
      .then(data =>
        this.setState({
          result: 'Drink added',
        }),
      )
      .catch(err =>
        this.setState({
          result: err.response.data.code,
        }),
      );
  };

  render() {
    const { result, name, type, percentage, cost, volume, health, drinkLabels, healthLabels } = this.state;
    return (
      <div className="add-event-form">
        <form noValidate onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label className="name-label">Name:</label>
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </div>
          <div className="input-group">
            <label className="type-label">Type:</label>
            <select name="type" value={type} onChange={this.handleChange}>
              {drinkLabels.map(item => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label className="percentage-label">Percentage:</label>
            <input type="text" name="percentage" value={percentage} onChange={this.handleChange} />
          </div>
          <div className="input-group">
            <label className="cost-label">Cost(in cents):</label>
            <input type="text" name="cost" value={cost} onChange={this.handleChange} />
          </div>
          <div className="input-group">
            <label className="volume-label">Volume:</label>
            <input type="text" name="volume" value={volume} onChange={this.handleChange} />
          </div>
          <div className="input-group">
            <label className="health-label">Type:</label>
            <select name="health" value={health} onChange={this.handleChange}>
              {healthLabels.map(item => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="event-submit-btn">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddEvent);
