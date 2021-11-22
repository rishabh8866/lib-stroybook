import React, { useEffect, useState } from "react";

import { SelectExtraProps } from "./select.types";
import { Multiselect } from 'multiselect-react-dropdown';


import "./select.scss";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, SelectExtraProps {

}

const Select: React.FC<SelectProps> = React.forwardRef(({ label, options, api, multi, selectedValues, onRemove, onSelectList, ...props }, ref: any) => {
    return (
        <div>
            {!multi ? (<>
                {label && <label className="form-label">{label}</label>}
                <select {...props} ref={ref} className="form-select"  data-testid={"select-" + props.name}>
                    <option >Select {label}</option>
                    {options && options.map(({ label, value }) => <option value={value}>{label}</option>)}
                </select>
            </>) : (
                <div  data-testid={"select-" + props.name}>
                <Multiselect
                    options={options} // Options to display in the dropdown
                    displayValue="label" // Property name to display in the dropdown options
                    selectedValues={selectedValues}
                    onSelect={onSelectList}
                    onRemove={onRemove}
                />
                </div>)}
        </div>
    )
}
);

export default Select;
