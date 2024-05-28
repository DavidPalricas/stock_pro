import React from 'react';
import '../css/warning_popup.css';

function WarningPopup({ message, onClose }) {
    return (
        <div className="warning-popup">
            <div className="popup-content">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default WarningPopup;
