import React, { useEffect, useState } from "react";
import Button from "../button";
import Code from "../Code/Code";
import Toast from "./toast";

export default {
    title: "Toast"
};


export const ToastOpen = () => {
    const [open, setModel] = useState(false)
    return (
        <Code width="w-50" code={` <div>
        <Button btnType="primary" isOutline={true} onClick={() => setModel(!open)}>Toast Header</Button>
        <Toast open={open} title={'Model'} onClose={() => setModel(!open)} position="top-center">
            This is Toast Message
        </Toast>
    </div>`}>
            <div>
                <Button btnType="primary" isOutline={true} onClick={() => setModel(!open)}>Toast Header</Button>
                <Toast open={open} title={'Model'} onClose={() => setModel(!open)} position="top-center">
                    This is Toast Message
                </Toast>
            </div>
        </Code>

    )
}


export const ToastOpenWithoutHeader = () => {
    const [open, setModel] = useState(false)
    return (
        <Code width="w-50" code={`<div>
        <Button btnType="primary" isOutline={true} onClick={() => setModel(!open)}>Toast</Button>
        <Toast open={open} onClose={() => setModel(!open)}>
        This is Toast Message
        </Toast>
    </div>`}>

            <div>
                <Button btnType="primary" isOutline={true} onClick={() => setModel(!open)}>Toast</Button>
                <Toast open={open} onClose={() => setModel(!open)}>
                    This is Toast Message
                </Toast>
            </div>
        </Code>

    )
}
export const ToastOpenPosition = () => {
    const [tropen, settrToast] = useState(false)
    const [tlopen, settlToast] = useState(false)
    const [blopen, setblToast] = useState(false)
    const [bropen, setbrToast] = useState(false)
    return (
        <Code width="w-50" code={`<div>
        <Button btnType="primary" isOutline={true} onClick={() => setModel(!open)}>Top Right</Button>
        <Toast open={open} onClose={() => setModel(!open)} position="top-right">
            This is Toast Message
        </Toast>
    </div>`}>
            <div className="d-flex ">
                <div>
                    <Button btnType="primary" isOutline={true} onClick={() => settrToast(!tropen)}>Top Right</Button>
                    <Toast open={tropen} onClose={() => settrToast(!tropen)} position="top-right">
                        This is Toast Message
                    </Toast>
                </div>
                <div className="ms-2">
                    <Button btnType="primary" isOutline={true} onClick={() => settlToast(!tlopen)}>Top Left</Button>
                    <Toast open={tlopen} onClose={() => settrToast(!tlopen)} position="top-left">
                        This is Toast Message
                    </Toast>
                </div>
                <div className="ms-2">
                    <Button btnType="primary" isOutline={true} onClick={() => setblToast(!blopen)}>Bottom Left</Button>
                    <Toast open={blopen} onClose={() => settrToast(!blopen)} position="bottom-left">
                        This is Toast Message
                    </Toast>
                </div>
                <div className="ms-2">
                    <Button btnType="primary" isOutline={true} onClick={() => setbrToast(!bropen)}>Bottom Left</Button>
                    <Toast open={bropen} onClose={() => settrToast(!bropen)} position="bottom-right">
                        This is Toast Message
                    </Toast>
                </div>
            </div>
        </Code>

    )
}


export const ToastStack = () => {
    const [toast, addToast] = useState([])
    const add = () => {
        const toastArray = [...toast];
        toastArray.push({children: 'This is Toast Message'});
        addToast([...toastArray]);
    }
    const onClose = (index) => {
        const toastArray = [...toast];
        toastArray.splice(index, 1);
        addToast([...toastArray]);
   }
    return (
        <Code width="w-50" code={`<div>
        <Button btnType="primary" isOutline={true} onClick={() => addToast(!open)}>Toast</Button>
        {toast.map((t) => <Toast open={true} onClose={() => setModel(!open)}>
            This is Toast Message
        </Toast>)}                
    </div>`}>

            <div>
                <Button btnType="primary" isOutline={true} onClick={add}>Toast</Button>
                <Toast open={true} timeOut={2000} stacks={toast} isStack={true} onClose={onClose} position="bottom-right">
                    This is Toast Message
                </Toast>              
            </div>
        </Code>

    )
}

