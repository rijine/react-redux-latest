import React, { Component } from 'react';
import { Counter } from './components/Counter';

export const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h3>{props.subtitle}</h3>}

      <Counter />
    </div>
  );
};

Header.defaultProps = {
  title: 'My React App'
};

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

    this.setState(() => ({
      error
    }));
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

export const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      Options Length - {props.options.length}
      {props.options.map(option => {
        return (
          <Option
            key={option}
            option={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        );
      })}
    </div>
  );
};

export const Option = props => {
  return (
    <div>
      Option - {props.option}
      <button
        onClick={() => {
          props.handleDeleteOption(props.option);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export const UserInfo = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
    </div>
  );
};
