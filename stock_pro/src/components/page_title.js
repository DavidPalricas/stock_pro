import React from "react";
import '../css/page_title.css'

function PageTitle(props){
    return(
        <div className="page-title">
            <p>{props.title}</p>
        </div>
    )
};

export default PageTitle;