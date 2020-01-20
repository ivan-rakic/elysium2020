import React, { Component } from 'react';
import Header from './components/UI/Header';
import Banner from './components/Home/Banner';
import Home from './components/Home/Home';
import Spinner from './components/UI/Spinner/Spinner';

import './App.css';

class App extends Component {

  state = {
    isLoading: true
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  render() {

    return (
      this.state.isLoading ? <Spinner /> : <div><Header><Banner /><Home /></Header></div>
    );
  }
}

export default App;
