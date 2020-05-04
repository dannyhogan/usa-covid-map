import React from 'react';
import './Modal.scss'
import states from '../../states'

const Modal = ({ activeState, toggleOpen, modalOpen }) => {

    console.log(activeState)
    return (
        <div className={`Modal ${!modalOpen && 'hidden'}`}>
            <button className="close-button" onClick={() => toggleOpen(open => !open)}>X</button>
            {
                activeState ? (
                    <div className="state-info">
                        <h1>{states[activeState.state]}</h1>
                    </div>)

                    : (
                        <div className="no-state-info">
                            <h1>No State Info</h1>
                        </div>)
            }
        </div>
    )
}

export default Modal