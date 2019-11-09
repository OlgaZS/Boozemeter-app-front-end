import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateView from './views/PrivateView';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import { withAuth } from './Context/AuthContext';

import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    // const { handleLogout } = this.props;
    return (
      <div className="app-layout">
        <Router>
          <Header />
          <Switch>
            <AnonRoute exact path="/login" component={Login} />
            <AnonRoute exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/private" component={PrivateView} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default withAuth(App);
