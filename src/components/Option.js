import React from 'react';

export const Option = props => (
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
