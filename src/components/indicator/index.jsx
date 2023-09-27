import React from "react";

function Indicator({ title = 'Taponamiento', content = '2%'}) {

    return(
    <>
        <div className="indicators-container">
            <h4 className="indicators-title">
                {title}
            </h4>
            <h2 className="indicators-content">
                {content}
            </h2>
        </div>
    </>

    )
}

export { Indicator };