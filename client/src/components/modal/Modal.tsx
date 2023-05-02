import "./Modal.css";

import { FunctionComponent, ReactNode } from "react";

interface ModalArgs {
  children: ReactNode;
  title?: string;
  closeModal: () => void;
}
const Modal: FunctionComponent<ModalArgs> = ({ children, closeModal }) => {
  return (
    <div className={`Modal`}>
      <div className="modal-content">
        <p className="close" onClick={closeModal}>
          X
        </p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
