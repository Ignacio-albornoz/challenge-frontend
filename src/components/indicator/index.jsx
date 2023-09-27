import React from "react";
import './styles.css';


function Indicator({ title = 'Taponamiento', content = '2%'}) {


    return(
    <>
        <div className="indicator-container">
            <h5 className="indicator-title indicator-text">
                {title}
            </h5>
            <h2 className="indicator-content indicator-text">
                {content}
            </h2>
        </div>
    </>

    )
}

export { Indicator };