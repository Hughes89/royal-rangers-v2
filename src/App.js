import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';
import Events from './Events/Events';
import Login from './Login/Login';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faCalendar, faImage, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// Bulma
import 'bulma/css/bulma.css';

// Date Picker CSS
import "react-datepicker/dist/react-datepicker.css";


import './App.css';

// Add Icons to library
library.add(faUser, faCalendar, faImage, faPlus, faMinus);



class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  renderApplication() {
    return (
      <div>
          <Navigation> setUser={this.setUser}</Navigation>
        <div className="container rr-content-container">
          <Events></Events>
        </div>
      </div>
    );
  }

  renderLogin() {
    return (
      <Login setUser={this.setUser}></Login>
    )
  }

  render() {
    return (
      <div>
        {this.state.user ? this.renderApplication() : this.renderLogin()}
      </div>
    );
  }
}

export default App;
