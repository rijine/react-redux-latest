import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

export class Action extends Component {
  render() {
    return (
      <div>
        <button>Okey</button>
      </div>
    );
  }
}

export class AddOption extends Component {
  render() {
    return <div>Add Options</div>;
  }
}

export class Options extends Component {
  render() {
    return (
      <div>
        Options Length - {this.props.options.length}
        {
          this.props.options.map( (option) => {
            return <Option key={option} option={option}/>
          })
        }
      </div>
    );
  }
}

export class Option extends Component {
  render() {
    return <div>Option - {this.props.option}</div>;
  }
}
