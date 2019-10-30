import React, { Component } from 'react';
import logo from './assets/images/logo-260.png';
import Clock from './Clock';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'July 20, 2020'
    };
  }

  render() {

    return (
      <div className="welcome-page">
        <div className="welcome-msg">
          <div className="roto-holder">
            <img className="roto-logo" src={logo} alt="Elysium Island Logo" />
          </div>
          <h2 className="text-woodgod">Elysium Island</h2>
          <h1 className="header-main welcome-text--h1" >
            <span>
              Thank you for participating in 2019 edition.
          </span>
          </h1>
          <h2>
            <span>
              See you next year!
          </span>
          </h2>
          
          <Clock deadline={this.state.deadline} />
        </div>

      </div>
    );
  }
}

export default App;
