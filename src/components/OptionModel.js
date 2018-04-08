import React from 'react';
import Modal from 'react-modal';

export const OptionModel = props => (
  <Modal
    isOpen={!!props.selectedOption}
    className="modal"
    contentLabel="Minimal Modal Example"
  >
    <h2>Selected Option</h2>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelection}>Close Modal</button>
  </Modal>
);
