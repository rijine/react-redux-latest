import React, { Component } from 'react';

export class Action extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemove() {
    alert('remove');
  }

  handleRemoveAll() {
    alert(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemove}>Remove</button>
        <button onClick={this.handleRemoveAll}>Remove All</button>
      </div>
    );
  }
}
