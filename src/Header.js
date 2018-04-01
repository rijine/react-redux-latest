import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>

        <Counter />
      </div>
    );
  }
}

/* export class Action extends Component {
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
} */

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

    this.setState(() => {
      return {
        error
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <div>{this.state.error}</div>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export class Options extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemove() {
    alert('remove');
  }
  handleRemoveAll() {
    //alert(this.props.options);
    this.props.handleDeleteOptions();
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemove}>Remove</button>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        Options Length - {this.props.options.length}
        {this.props.options.map(option => {
          return <Option key={option} option={option} />;
        })}
      </div>
    );
  }
}

export class Option extends Component {
  render() {
    return <div>Option - {this.props.option}</div>;
  }
}

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
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
