import React, { Component } from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      showCounter: true
    };
    this.addOne = this.addOne.bind(this);
    this.decOne = this.decOne.bind(this);
    this.reset = this.reset.bind(this);
    this.toggleMe = this.toggleMe.bind(this);
  }
  toggleMe() {
    this.setState(prevState => {
      return {
        showCounter: !prevState.showCounter
      };
    });
  }
  addOne() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  decOne() {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  }

  reset() {
    this.setState(() => {
      return { count: 0 };
    });
  }

  render() {
    return (
      <div>
        {this.state.showCounter && <div>Counter : {this.state.count}</div>}
        <button onClick={this.toggleMe}>
          {this.state.showCounter ? 'Hide Counter' : 'Show Counter'}
        </button>
        <button onClick={this.addOne}>Add One</button>
        <button onClick={this.decOne}>Dec One</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
}
