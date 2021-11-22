import React from "react";
import classNames from "classnames";

import { ToastProps } from "./toast.types";

import "./toast.scss";

interface ToastComponentProp extends ToastProps {
    stacks?: ToastProps[]
}

const ToastWithHeader: React.FC<ToastProps> = ({ children, open, subTitle, title, onClose, img, bgColor }, position) => {
    const aplliedClasses = classNames("toast show", bgColor && `bg-${bgColor}` || '')
    const positionClassName = classNames("position-fixed p-3", position)
    return (
        <div className={positionClassName} >
            <div id="liveToast" className={aplliedClasses} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    {img && <img src={img} className="rounded me-2" alt="..." />}
                    <strong className="me-auto">{title}</strong>
                    <small>{subTitle}</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={onClose}></button>
                </div>
                <div className="toast-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

const ToastWithoutHeader: React.FC<ToastProps> = ({ children, onClose, bgColor }, position) => {
    const aplliedClasses = classNames("toast show align-items-center", bgColor && `bg-${bgColor}` || '')
    const positionClassName = classNames("position-fixed p-3", position)
    return (
        <div className={positionClassName} >
        <div className={aplliedClasses} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    {children}
   </div>
                <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={onClose}></button>
            </div>
        </div>
        </div>
    )
}

const ToastWithoutHeaderStack: React.FC<ToastProps> = ({ children, onClose, bgColor }, position) => {
    const aplliedClasses = classNames("toast show align-items-center", bgColor && `bg-${bgColor}` || '')
    const positionClassName = classNames("position-fixed p-3", position)
    return (
        // <div className={positionClassName} >
        <div className={aplliedClasses} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    {children}
   </div>
                <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={onClose}></button>
            </div>
        </div>
        // </div>
    )
}

const computePosition = (position) => {
    let classPosition = '';
    if (position.includes('bottom-')) {
        classPosition += 'bottom-0 '
    } else if (position.includes('top-')) {
        classPosition += 'top-0 '
    } else if (position.includes('center-')) {
        classPosition += 'top-50 '
    } else {
        classPosition += 'bottom-0 '
    }
    if (position.includes('-right')) {
        classPosition += 'end-0 '
    } else if (position.includes('-center')) {
        classPosition += 'start-50 '
    } else if (position.includes('-left')) {
        classPosition += 'start-0 '
    } else {
        classPosition += 'end-0 '
    }
    return classPosition;
}

const TimeOut = (props: ToastComponentProp, index?: number) => {
    if (props.timeOut) {
        setTimeout(() => props.onClose(index), props.timeOut);
    }
}

const Toast: React.FC<ToastComponentProp> = (props) => {
    const position = computePosition(props.position || '')
    if (!props.isStack) {
        TimeOut(props); 
    }
    if (props.open && props.title) {
        return ToastWithHeader(props, position)
    } else  if (props.open && props.isStack && props.stacks  && props.stacks.length && !props.title) {
        return (
            <div className={"toast-container position-fixed p-3" + position}>
                {props.stacks.map((t, index) => {
                    TimeOut(props, index);
                   return  ToastWithoutHeaderStack(t, computePosition(props.position || ''))
                })}
            </div>
        )
    } else if (props.open && !props.title && !props.stacks) {
        return ToastWithoutHeader(props, position)
    } else {
        return null;
    }
}

export default Toast;
