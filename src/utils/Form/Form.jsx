import React from 'react';
import './Form.scss';

const Form = ({children, title}) => {
    return (
        <div className="backGround">
            <div className="Form">
                <h1 className="Form__title">{title}</h1>
                {children}
            </div>
        </div>
    );
};

export {Form};