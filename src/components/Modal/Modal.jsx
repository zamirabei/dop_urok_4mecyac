import React, { useContext } from 'react';
import { ModalContext } from '../../pages1/context/ModalProvider';

const Modal = () => {
    const { isOpen,closeModal} = useContext(ModalContext)
    if(!isOpen)return null
    return (
        <div>
            <h1>MODAl</h1>
            <button onClick={closeModal}>close</button>
        </div>
    )
}

export default Modal;
