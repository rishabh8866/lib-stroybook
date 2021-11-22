import React from "react";

import { CardProps } from "./card.types";

import "./card.scss";

const Card: React.FC<CardProps> = React.forwardRef(({ children }) => {
    return (
        <div className="card" data-testid={"card"}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}
);

export default Card;
