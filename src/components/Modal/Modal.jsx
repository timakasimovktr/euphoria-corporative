import React from "react";
import CloseCircle from "../../images/Close-Circle.svg";
import "./Modal.scss";
const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = ["modal"];
  if (visible) {
    rootClasses.push(" ", "modal-active");
  }
  const classNames = rootClasses.join(" ");
  return (
    <>
      <div className={classNames} onClick={() => setVisible(false)}>
        <div
          className="modal-window"
          onClick={(event) => event.stopPropagation()}
        >
          <img
            onClick={() => setVisible(false)}
            src={CloseCircle}
            className="close-circle"
            alt=""
          />
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
