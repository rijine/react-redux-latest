import React, { Component } from 'react';
import './App.css';

import { Header, Action, Options } from './Header';

class App extends Component {
  render() {
    const title = 'Header Title';
    const subtitle = 'Header Title';
    const options = ['a', 'b', 'c'];

    return (
      <div className="App">
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
      </div>
    );
  }
}

export default App;
