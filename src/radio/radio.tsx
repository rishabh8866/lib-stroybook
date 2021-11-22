import React from "react";
import classNames from "classnames";

import { RadioExtraProps } from "./radio.types";

import "./radio.scss";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement>, RadioExtraProps {

}

const Radio: React.FC<RadioProps> = React.forwardRef(({ type, children, ...props }, ref: any) => {
    type = "radio"
    return (
        <div className="form-check">
        <input {...props} ref={ref} type={type}  data-testid={"radio-" + props.name}/>
            <label className="form-check-label ms-2"  htmlFor={props.id}>
                {children}
            </label>
        </div>
    )
}
);

export default Radio;
