import React, { useState } from "react";
import '../css/nif_option.css';

function NifOption(props) {
    const [showInput, setShowInput] = useState(false);

    const handleRadioChange = (event) => {
        setShowInput(event.target.value === "Yes");
        if (event.target.value === "No") {
            props.onChange({ target: { value: "" } }); // Reset NIF value if "No" is selected
        }
    };

    return (
        <div id="client-nif">
            <label className="nif-label">{props.name}</label>
            <div className="radio-group">
                <label className="option-name">Yes</label>
                <input
                    className="radio"
                    type="radio"
                    name="nifOption"
                    value="Yes"
                    onChange={handleRadioChange}
                />
                <label className="option-name">No</label>
                <input
                    className="radio"
                    type="radio"
                    name="nifOption"
                    value="No"
                    onChange={handleRadioChange}
                />
            </div>
            {showInput && (
                <input
                    className="nif-input"
                    type="text"
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            )}
        </div>
    );
}

export default NifOption;
