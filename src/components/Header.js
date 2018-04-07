import React, { Component } from 'react';
import { Counter } from './Counter';

export const Header = props => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      {props.subtitle && <h3>{props.subtitle}</h3>}

      <Counter />
    </div>
  );
};

Header.defaultProps = {
  title: 'My React App'
};
