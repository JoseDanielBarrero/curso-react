import React from 'react';
import ReactDom from 'react-dom';
import { TodoContext } from '../TodoContext';
import './Modal.css';


function Modal({children}) {

    const 
    {
        openModal,
        setOpenModal
    }=React.useContext(TodoContext);

    const closeModal = () => {
        setOpenModal(false)
    }
    return ReactDom.createPortal(
        <div className='Modal' onClick={closeModal}>
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;