import React from 'react';
import "./Card.css";
const Card = (props) => {
    const classes = 'card '+props.className;   // using the sub component className
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export  default Card;