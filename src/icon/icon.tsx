import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconProps } from "./icon.types";

import "./icon.scss";

const Icon: React.FC<IconProps> = ({icon, color, spin, size}) => {
    return <><FontAwesomeIcon icon={icon} color={color} spin={spin} size={size}  data-testid={"icon"}/></>
}

export default Icon;
