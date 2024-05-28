import React from "react";
import "../css/filter_button.css";
function Filter_button({text,onClick}) {
  return (
 
    <button className="filter-button" onClick= {onClick}>{text}</button>
  
  );
}


export default Filter_button;