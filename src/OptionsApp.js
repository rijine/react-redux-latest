import React, { Component } from 'react';
import './App.css';

import { Header } from './components/Header';
import { AddOption } from './components/AddOption';
import { Options } from './components/Options';
import { OptionModel } from './components/OptionModel';
import { UserInfo } from './components/UserInfo';

class OptionsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['a', 'b', 'c'],
      selectedOption: undefined
    };
    this.hanldeDeleteOptions = this.hanldeDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.hanldeDeleteOption = this.hanldeDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleClearSelection = this.handleClearSelection.bind(this);
  }

  componentDidMount() {
    console.log('Did mount');
    const json = JSON.parse(localStorage.getItem('option'));
    this.setState(() => ({ options: json }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Did update', prevProps, prevState);
    let json;
    try {
      json = JSON.stringify(this.state.options);
    } catch (e) {}

    if (json) {
      localStorage.setItem('option', json);
    }
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  handlePick() {
    const randomNo = Math.floor((Math.random() * this.state.options.length));
    this.setState(() => ({ selectedOption: this.state.options[randomNo] }));
  }

  handleClearSelection() {
    this.setState(() => ({ selectedOption: undefined }));
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
        options: prevState.options.concat(option),
        isModelOpen: true
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
      <div className="">
        {/* <UserInfo name="My Name" /> */}
        <Header subtitle={subtitle} />
        <div className="container">
          <button className="btn-large" onClick={this.handlePick}> What do I do?</button>
          <Options
            options={this.state.options}
            handleDeleteOptions={this.hanldeDeleteOptions}
            handleDeleteOption={this.hanldeDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
          <OptionModel
            handleClearSelection={this.handleClearSelection}
            selectedOption={this.state.selectedOption}
          />
        </div>
      </div>
    );
  }
}

export default OptionsApp;
