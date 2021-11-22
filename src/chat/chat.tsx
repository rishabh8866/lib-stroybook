import React from "react";

import { CardProps } from "./chat.types";

import "./chat.scss";
import { Button, Icon } from "..";

const Chat: React.FC<CardProps> = React.forwardRef(
  ({ children, isOpen, setOpen }) => {
    return (
      <div className={"chat-popup" + (isOpen ? "chat-open" : "")} id="myForm">
        <form className="form-container">
          <h1>Chat My chat</h1>

          <label htmlFor="msg">{children}</label>
          <textarea placeholder="Type message.." name="msg" required></textarea>

          <Button type="submit" className="btn">
            Send
          </Button>
          <Button
            type="button"
            className="btn cancel"
            onClick={() => setOpen(false)}
          >
            Close
            <Icon icon="cross" />
          </Button>
        </form>
      </div>
    );
  }
);

export default Chat;
