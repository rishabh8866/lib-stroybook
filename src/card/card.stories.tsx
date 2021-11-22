import React from "react";
import Code from "../Code/Code";
import Card from "./card";

export default {
  title: "Card"
};

export const Cards = () => {
  return (
    <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
      <div className="d-flex justify-content-center">
        <Card>
          this is card have fun
        </Card>
      </div>
    </Code>
  )
}