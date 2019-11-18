import React, { Component } from 'react';
import { getFormattedDateString } from '../helpers/getDateTime';
import { getDrinkImagePath, getHealthImagePath } from '../helpers/getImagePath';
import eventService from '../services/eventService';

class BoozeStatistics extends Component {
  state = {
    isLoading: true,
    days: 7,
    boozeTime: null,
    favDrink: null,
    moneySpent: null,
    freqHealth: null,
  };

  componentDidMount() {
    const { type } = this.props;
    const { days } = this.state;
    eventService.getStatistics(type, days).then(data =>
      this.setState({
        isLoading: false,
        boozeTime: data.boozeTime,
        favDrink: data.favDrink,
        moneySpent: data.moneySpent,
        freqHealth: data.freqHealth,
      }),
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { type } = this.props;
    const { days } = this.state;
    eventService.getStatistics(type, days).then(data =>
      this.setState({
        isLoading: false,
        boozeTime: data.boozeTime,
        favDrink: data.favDrink,
        moneySpent: data.moneySpent,
        freqHealth: data.freqHealth,
      }),
    );
  };

  handleChange = event => {
    const days = parseInt(event.target.value);
    this.setState({
      days: days && days > 0 ? days : 7,
    });
  };

  render() {
    const { isLoading, boozeTime, favDrink, moneySpent, freqHealth } = this.state;
    /* type - 'group' or 'user' - type of displayed data */
    const { type } = this.props;
    const { days } = this.state;

    /* time right now (in ms) */
    const periodEnd = new Date().getTime();
    /* subtracting X days in ms from now */
    // eslint-disable-next-line radix
    const periodStart = periodEnd - parseInt(days) * 24 * 60 * 60 * 1000;
    return (
      <div className="statistics-item">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <form noValidate onSubmit={this.handleSubmit}>
              <input type="number" value={days} onChange={this.handleChange} />
              <button type="submit">OK</button>
            </form>
            {/* different headers despite of component's type */}
            <div className="statistics-heading">{type === 'group' ? 'Group' : 'Your'} Statistics</div>
            <span className="statistics-period">
              Period: {getFormattedDateString(periodStart)} - {getFormattedDateString(periodEnd)}
            </span>
            <div className="statistics-data">
              <div className="statistics-days">
                <span className="statistics-description">booze time</span>
                <span className="statistics-numeric">{boozeTime}</span>
                <span>days</span>
              </div>
              <div className="statistics-drink">
                <span className="statistics-description">favourite drink</span>
                <div className="statistics-image">
                  <img src={getDrinkImagePath(favDrink)} style={{ height: '60px' }} alt="" />
                </div>
                <span>{favDrink}</span>
              </div>
              <div className="statistics-cost">
                <span className="statistics-description">money spent</span>
                {/* displaying in euros (dividing by 100) and left only integer part without decimals (parseInt) */}
                <span className="statistics-numeric">{parseInt(moneySpent / 100)}</span>
                <span>euro</span>
              </div>
              <div className="statistics-health">
                <span className="statistics-description">frequent health</span>
                <div className="statistics-image">
                  <img src={getHealthImagePath(freqHealth)} style={{ height: '60px' }} alt="" />
                </div>
                <span>{freqHealth}</span>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default BoozeStatistics;
