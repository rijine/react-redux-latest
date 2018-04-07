import React from 'react';
import { Option } from './Option';

export const Options = props => (
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
