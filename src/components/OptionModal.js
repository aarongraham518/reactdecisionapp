import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (

    <div>
        <Modal //{note: !!'string' is true !!undefined is false}
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
            {//props.handleClearSelectedOption will fire upstream
            }
            <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>            
        
        </Modal>
    </div>
);

export default OptionModal;