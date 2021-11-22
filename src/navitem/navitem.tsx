import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { NavItemExtraProps } from "./navitem.types";

import "./navitem.scss";

interface NavItemProps extends NavItemExtraProps {

}

const Navitem: React.FC<NavItemProps> = ({open, list, isRight, forwardRef, children}) => {
    const aplliedClasses = classNames("dropdown-menu", open && "show", isRight && "dropdown-menu-right")
    return (
        <div  ref={forwardRef}>
            {children}
                <div className={aplliedClasses} data-testid={"navitem"}>
                    {list && list.map((l) => {
                    const classes = classNames("dropdown-item", l.isbold && "fw-bold h5 mb-2", l.onClick && l.isAnchorTag && "text-primary", l.className)
                        return (
                            <div key={l.label}>
                            {l.onClick ? <a className={classes} onClick={l.onClick}>{l.label}</a> : <span className={classes}>{l.label}</span>}
                            {l.divider && <div className="dropdown-divider"></div>}
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Navitem;
