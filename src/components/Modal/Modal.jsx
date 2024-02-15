import React from "react";
import './Modal.scss';
const Modal = ({ children, visible, setVisible }) => {
    const rootClasses = ['modal']
    if (visible) {
        rootClasses.push(' ','modal-active');
    }
    const classNames = rootClasses.join(' ');
    return (
        <>
            <div className={classNames} onClick={() => setVisible(false)}>
                <div className='modal-content' onClick={(event) => event.stopPropagation()}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal;