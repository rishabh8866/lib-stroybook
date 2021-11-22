import React from "react";
import classNames from "classnames";

import { ModalProps } from "./model.types";

import "./modal.scss";

const Modal: React.FC<ModalProps> = ({children, open, hideClose, title, size, onClose,  buttons}) => {
    const aplliedClasses = classNames("modal fade show", open && "show-modal", size && "")
    return open && (
        <div className={aplliedClasses}  data-testid={"model"}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    {!hideClose && <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>}
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    {buttons && buttons.map(b => <button type="button" className={`btn ${b.className}`} data-bs-dismiss="modal" onClick={b.onClick}>{b.label}</button>)}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
