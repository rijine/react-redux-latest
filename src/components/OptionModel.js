import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

export const OptionModel = props => {
  return (
    <ReactModal
      isOpen={!!props.selectedOption}
      contentLabel="Minimal Modal Example"
    >
    <h2>Selected Option</h2>
      <button onClick={ props.handleClearSelection}>Close Modal</button>
    </ReactModal>
  );
};
