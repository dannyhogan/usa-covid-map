import React from "react";
import StateDisplay from "../StateDisplay/StateDisplay";
import "./Modal.scss";

const Modal = ({ activeState, toggleOpen, modalOpen }) => {
  console.log(activeState);
  return (
    <div className={`Modal ${!modalOpen && "hidden"}`}>
      <button
        className="close-button"
        onClick={() => toggleOpen((open) => !open)}
      >
        X
      </button>
      {activeState ? (
        <StateDisplay stateData={activeState} />
      ) : (
        <div className="no-state-info">
          <h1>Unable to get COVID-19 data.</h1>
        </div>
      )}
    </div>
  );
};

export default Modal;
