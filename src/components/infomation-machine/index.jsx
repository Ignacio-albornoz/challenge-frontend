import "./styles.css"

export function InformationMachine({title, data}){

    return(
        <div className="information-table">
            <div className="information-header">
                <div className="information-title">
                    <h4>{title}</h4>
                </div>
            </div>
            <ul className="information-content">
                {Object.entries(data).map(([key, value]) => (
                    <li key={key} className="information-li">
                        <h5 className="information-value" >{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
                        <h5 className="information-value" >{value}</h5>
                    </li>
                ))}
                
            </ul>
        </div>                                               
    )
}