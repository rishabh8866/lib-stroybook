import React from "react";
import Code from "../Code/Code";
import Card from "./chat";

export default {
  title: "Chat"
};

export const Chat = () => {
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