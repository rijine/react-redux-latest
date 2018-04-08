import React, { Component } from 'react';

export class AddOption extends Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    const error = this.props.handleAddOption(option);

    this.setState(() => ({
      error
    }));
  }
  render() {
    return (
      <div>
        {this.state.error && <div>{this.state.error}</div>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="btn-custom">Add Option</button>
        </form>
      </div>
    );
  }
}
