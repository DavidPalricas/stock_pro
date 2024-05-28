import React from "react";
import '../css/data_field.css'

function DataField(props) {
    return (
        <div className="data-field">
            <label className="field-name">{props.name}</label>
            {props.name === "Description:" ? (
                <textarea
                    className="input-field large"
                    name={props.name}
                    placeholder={props.placeholder}
                    maxLength={250}
                    value={props.value}
                    onChange={props.onChange}
                ></textarea>
            ) : (
                <input
                    className="input-field"
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

export default DataField;
