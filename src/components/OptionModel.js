import React from 'react';
import Modal from 'react-modal';

export const OptionModel = props => (
  <Modal
    isOpen={!!props.selectedOption}
    className="modal"
    contentLabel="Minimal Modal Example"
  >
    <h2>Selected Option</h2>
    <div className="modal__body">
      {props.selectedOption && <p>{props.selectedOption}</p>}
    </div>
    <button className="btn-custom" onClick={props.handleClearSelection}>
      Close Modal
    </button>
  </Modal>
);
