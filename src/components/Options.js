import React from 'react';
import { Option } from './Option';

export const Options = props => (
  <div className="widget">
    <div className="widget-header">
      <h2 className="widget-header__title">Your Options</h2>
      <button
        className="btn-custom btn--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    <div>
      <div className="widget__message">
        Options Count - {props.options.length}
      </div>
      {props.options.map((option, index) => {
        return (
          <Option
            key={option}
            option={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />
        );
      })}
    </div>
  </div>
);
