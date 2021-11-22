import React from "react";
import classNames from "classnames";

import { ButtonExtraProps } from "./button.types";

import "./button.scss";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonExtraProps {}

const Button: React.FC<ButtonProps> = React.forwardRef(
  ({ children, btnType, isOutline, btnSize, ...props }, ref: any) => {
    const buttonClasses = classNames(
      "btn",
      isOutline ? `btn-outline-${btnType}` : `btn-${btnType}`,
      btnSize ? `btn-${btnSize}` : ""
    );
    return (
      <button
        {...props}
        ref={ref}
        className={buttonClasses}
        data-testid={"button-" + props.name}
      >
        {children}
      </button>
    );
  }
);

export default Button;
