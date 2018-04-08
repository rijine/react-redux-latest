import React from 'react';

export const Option = props => (
  <div className="option">
    <p className="option__text">{props.count}. {props.option} </p>
    <button className="btn-custom btn--link"
      onClick={() => {
        props.handleDeleteOption(props.option);
      }}
    >
      Remove
    </button>
  </div>
);
