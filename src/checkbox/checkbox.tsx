import React from "react";

import { CheckBoxExtraProps } from "./checkbox.types";

import "./checkbox.scss";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement>, CheckBoxExtraProps {

}

const CheckBox: React.FC<CheckBoxProps> = React.forwardRef(({ type, children, ...props }, ref: any) => {
    type = "checkbox"
    return (
        <div className="form-check">
        <input {...props} type={type} ref={ref} data-testid={"checkbox-" + props.name}/>
            <label className="form-check-label ms-2" htmlFor={props.id}>
                {children}
            </label>
        </div>
    )
}
);

export default CheckBox;
