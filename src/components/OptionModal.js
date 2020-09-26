import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <div>
        <Modal //{note: !!'string' is true !!undefined is false}
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel="Selected Option"
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            {//props.handleClearSelectedOption will fire upstream
            }
            <button onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    </div>
);

export default OptionModal;