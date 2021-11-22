import React from "react";
import Code from "../Code/Code";
import TextBox from "./textbox";

export default {
  title: "TextBox"
};

export const Size = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
          <h3>Small</h3>
          <TextBox textBoxsize="sm" placeholder="Small size Textbox" type="text"/>
        </Code>
        <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
          <h3>Mid</h3>
          <TextBox textBoxsize="md" placeholder="Mid size Textbox" type="text" />
        </Code>
        <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
          <h3>Large</h3>
          <TextBox textBoxsize="lg" placeholder="Large size Textbox" type="text" />
        </Code>

      </div>
    </div>
  )
}

export const InputGroup = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column w-100">
        <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
          <h3>Small</h3><TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon" />
        </Code>
        <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
          <h3>Mid</h3><TextBox isInputGroup={true} icon="$" iconPlace="sufix" placeholder="Textbox with Icon" />
        </Code>
        <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
          <h3>Large</h3><TextBox isInputGroup={true} icon="$" iconPlace="both" placeholder="Textbox with Icon" />
        </Code>


      </div>
    </div>
  )
}

export const Attributes = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
          <h3>Value</h3><TextBox value="Textbox with Icon" />
        </Code>
        <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
          <h3>placeholder</h3><TextBox placeholder="Textbox with Icon" />
        </Code>

      </div>
    </div>
  )
}

