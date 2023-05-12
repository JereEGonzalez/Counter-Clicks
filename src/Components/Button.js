import React from 'react';
import button from '../Stylesheets/button.css';

function Button({text, clickButton, clickManager}){

    return(    
        <button className={ clickButton ? 'click-button btn-click':'reset-button btn-click' } onClick={clickManager}>
            {text}
        </button>
    );
};

export default Button;