import React from "react";
import '../css/back_button.css';
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

export default function BackButton() {
    return (
        <div>
            <Link to="/stock">
                <GoArrowLeft className={"back-button"} id={"back-button"} />
            </ Link>
        </div>
    );
}
