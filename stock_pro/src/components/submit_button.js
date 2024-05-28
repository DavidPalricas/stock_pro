import React from 'react';
import '../css/submit_button.css';

function SubmitButton({onClick, text}) {
    return (
        <button id="submit_button" onClick={onClick}>
            {text}
        </button>
    );
}

export default SubmitButton;