import React, { Component } from 'react';
import './App.css';

import { Header, Action, AddOption, Options, UserInfo } from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['a', 'b', 'c']
    };
    this.hanldeDeleteOptions = this.hanldeDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.hanldeDeleteOption = this.hanldeDeleteOption.bind(this);
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

  hanldeDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }));
  }

  render() {
    const title = 'Header Title';
    const subtitle = 'Header Title';

    return (
      <div className="App">
        <UserInfo name="My Name" />
        <Header subtitle={subtitle} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.hanldeDeleteOptions}
          handleDeleteOption={this.hanldeDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default App;
