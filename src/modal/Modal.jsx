import React from 'react';

const Modal = ({ message, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
