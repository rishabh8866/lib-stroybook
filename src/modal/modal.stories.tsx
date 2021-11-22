import React, { useState } from "react";
import Button from "../button";
import Modal from "./modal";
import Code from "../Code/Code";

export default {
    title: "Modal"
};


export const ModelOpen = () => {
    const [open, setModel] = useState(false);
    const buttons: {label: string, onClick: any, className: string}[] = [
        {label: 'Save', onClick: () => setModel(!open), className: 'btn-primary'},
        {label: 'Close', onClick: () => setModel(!open), className: 'btn-secondary'},
    ];
    return (
        <div>
            <Code width="w-50" code={`<Button btnType="primary" isOutline={true} onClick={() => setModel(!open)} >Open Dialuge</Button>
            <Modal open={open} title={'Model'} onClose={() => setModel(!open)} onSave={() => setModel(!open)}>
                <h1>Body</h1>
            </Modal>`}>
                <Button btnType="primary" isOutline={true} onClick={() => setModel(!open)} >Open Dialuge</Button>
                <Modal open={open} title={'Model'} onClose={() => setModel(!open)} buttons={buttons}>
                    <h1>Body</h1>
                </Modal>
            </Code>
        </div>
    )
}

export const ModelConfirm = () => {
    const [open, setModel] = useState(false);
    const buttons: {label: string, onClick: any, className: string}[] = [
        {label: 'OK', onClick: () => setModel(!open), className: 'btn-success'},
        {label: 'Cancel', onClick: () => setModel(!open), className: 'btn-secondary'},
    ];
    return (
        <div>
            <Code width="w-50" code={`<Button btnType="primary" isOutline={true} onClick={() => setModel(!open)} >Open Dialuge</Button>
            <Modal open={open} title={'Model'} onClose={() => setModel(!open)} onSave={() => setModel(!open)}>
                <h1>Body</h1>
            </Modal>`}>
                <Button btnType="primary" isOutline={true} onClick={() => setModel(!open)} >Open Confirm Box</Button>
                <Modal open={open} hideClose={true} title={'Confirm'} onClose={() => setModel(!open)} buttons={buttons}>
                    <h3>Are you Sure?</h3>
                </Modal>
            </Code>
        </div>
    )
}


export const ModelAlert = () => {
    const [open, setModel] = useState(false);
    const buttons: {label: string, onClick: any, className: string}[] = [
        {label: 'Login', onClick: () => setModel(!open), className: 'btn-danger'},
    ];
    return (
        <div>
            <Code width="w-50" code={`<Button btnType="primary" isOutline={true} onClick={() => setModel(!open)} >Open Dialuge</Button>
            <Modal open={open} title={'Model'} onClose={() => setModel(!open)} onSave={() => setModel(!open)}>
                <h1>Body</h1>
            </Modal>`}>
                <Button btnType="primary" isOutline={true} onClick={() => setModel(!open)} >Open Alert Box</Button>
                <Modal open={open} hideClose={true} title={'Confirm'} onClose={() => setModel(!open)} buttons={buttons}>
                    <h3>Please Login Again?</h3>
                </Modal>
            </Code>
        </div>
    )
}

