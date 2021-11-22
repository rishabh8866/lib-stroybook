import React from "react";
import classNames from "classnames";

import { TextBoxExtraProps } from "./textbox.types";

import "./textbox.scss";

interface TextBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    TextBoxExtraProps {}

const TextBox: React.FC<TextBoxProps> = React.forwardRef(
  ({
    textBoxsize,
    isInputGroup,
    iconPlace,
    icon,
    backIcon,
    className,
    ...props
  }, ref: any) => {
    let textBoxFormSize =
      textBoxsize === "md" || textBoxsize === undefined
        ? ""
        : `${
            (isInputGroup && "input-control") || "form-control"
          }-${textBoxsize}`;

    const inputClasses = classNames(
      className,
      isInputGroup ? "input-control" : "form-control",
      textBoxFormSize
    );
    const textBoxIcon = (
      <span className="input-group-text">{backIcon || icon}</span>
    );
    return !isInputGroup ? (
      <>
        <input
          {...props}
          ref={ref}
          className={inputClasses}
          data-testid={"textbox-" + props.name}
        />
      </>
    ) : (
      <div className="input-group mb-3">
        {iconPlace &&
          (iconPlace === "prefix" || iconPlace === "both") &&
          textBoxIcon}
        <input
          {...props}
          ref={ref}
          className={inputClasses}
          data-testid={"textbox-" + props.name}
        />
        {iconPlace &&
          (iconPlace === "sufix" || iconPlace === "both") &&
          textBoxIcon}
      </div>
    );
  }
);

export default TextBox;
