import React from 'react';
import "./Button.scss"

const Button = ({children}) => {
    return (
        <button className="custom__btn">{children}</button>
    );
};

export {Button};