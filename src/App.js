import React, { Component } from 'react';
import './App.css';

import { Header, Action, AddOption, Options } from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['a', 'b', 'c']
    };
    this.hanldeDeleteOptions = this.hanldeDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  hanldeDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleAddOption(option) {
    if (!option) {
      return 'Invalid option input';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists';
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    const title = 'Header Title';
    const subtitle = 'Header Title';

    return (
      <div className="App">
        <Header title={title} subtitle={subtitle} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.hanldeDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default App;
