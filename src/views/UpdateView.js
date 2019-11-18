import React, { Component } from 'react';
import authService from '../services/authService';
import { withAuth } from '../Context/AuthContext';

class UpdateView extends Component {
  state = {
    result: '',
    username: this.props.user.username, // prefill input with username prop, which comes from withAuth HOC
  };

  handleChange = event => {
    this.setState({
      username: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    authService
      .updateUsername({
        username: this.state.username,
      })
      .then(data =>
        this.setState({
          result: 'Successfully updated',
        }),
      )
      .catch(err =>
        this.setState({
          result: err.response.data.code,
        }),
      );
  };

  render() {
    const { result, username } = this.state;
    return (
      <div className="update-view">
        <div className="update-view-inner">
          <div className="user-image-box" />
          <div className="user-update-box">
            {result ? <div className="user-update-result">{result}</div> : null}
            <form noValidate onSubmit={this.handleSubmit}>
              <input type="text" name="username" value={username} onChange={this.handleChange} />
              <button type="submit" className="update-submit-btn">
                Update username
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(UpdateView);
