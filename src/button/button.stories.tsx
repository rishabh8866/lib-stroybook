import { faArrowDown, faArrowLeft, faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Code from "../Code/Code";
import Icon from "../icon/icon";
import Button from "./button";

export default {
    title: "Button"
};


export const ButtonColor = () => {
    return (
        <div>
            <h3>Button Color</h3>
            <div className="d-flex justify-content-center flex-column">
                <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                    <Button btnType="primary">Primary</Button>
                </Code>
                <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                    <Button btnType="secondary">Secondary</Button>
                </Code>
                <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                    <Button btnType="success">Success</Button>
                </Code>
                <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                    <Button btnType="danger">Danger</Button>
                </Code>
                <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                    <Button btnType="warning">Warning</Button>
                </Code>
                <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                    <Button btnType="info">Info</Button>
                </Code>
                <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                    <Button btnType="light">Light</Button>
                </Code>
                <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                    <Button btnType="dark">Dark</Button>
                </Code>
                <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>

                    <Button btnType="link">Link</Button>
                </Code>
            </div>
        </div>
    )
}


export const ButtonOutline = () => {
    return (
        <div className="d-flex justify-content-between flex-column">
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="primary" isOutline={true}>Hello</Button>
            </Code>
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="secondary" isOutline={true}>Secondary</Button>
            </Code>
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="success" isOutline={true}>Success</Button>
            </Code>
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="danger" isOutline={true}>Danger</Button>
            </Code>
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="warning" isOutline={true}>Warning</Button>
            </Code>
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="info" isOutline={true}>Info</Button>
            </Code>
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="light" isOutline={true}>Light</Button>
            </Code>
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="dark" isOutline={true}>Dark</Button>
            </Code>
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="link" isOutline={true}>Link</Button>
            </Code>
        </div>
    )
}


export const ButtonSize = () => {
    return (
        <div className="d-flex justify-content-between flex-column">
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="primary" btnSize="lg">Hello</Button>
            </Code>
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="danger" btnSize="sm">Hello</Button>
            </Code>
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="danger" isOutline={true} btnSize="lg">Hello</Button>
            </Code>
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
                <Button btnType="primary" isOutline={true} btnSize="sm">Hello</Button>
            </Code>
        </div>
    )
}


export const ButtonGroup = () => {
    return (
        <div className="d-flex justify-content-between flex-column">
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
            <div className="btn-group w-25">
                <Button btnType="primary" btnSize="sm">Left</Button>
                <Button btnType="primary" btnSize="sm">Middle</Button>
                <Button btnType="primary" btnSize="sm">Right</Button>
                </div>
            </Code>
        </div>
    )
}


export const ButtonGroupIcon = () => {
    return (
        <div className="d-flex justify-content-between flex-column">
            <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
            <div className="btn-group w-25">
                <Button btnType="primary" btnSize="sm"><Icon icon={faArrowLeft}/></Button>
                <Button btnType="primary" btnSize="sm"><Icon icon={faArrowUp}/></Button>
                <Button btnType="primary" btnSize="sm"><Icon icon={faArrowDown}/></Button>
                <Button btnType="primary" btnSize="sm"><Icon icon={faArrowRight}/></Button>
                </div>
            </Code>
        </div>
    )
}