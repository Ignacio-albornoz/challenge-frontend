import { MACHINE_TITLE_ACTUALIZACION, MACHINE_TITLE_CLASE, MACHINE_TITLE_EMPRESA, MACHINE_TITLE_ESTADO } from "../../environment/machineTitles";
import { ListOfIndicators } from "../list-of-indicators";
import { MovementIndicator } from "../movement-indicator/movementIndicator";
import "./styles.css"


export function DetailsMachine ({machine}){
    

    return(
        <div className="details-content">
            <ListOfIndicators className="machine-details-indicators" indicators={machine.data.indicadores}/>
            <div className="details-wrap">
                <h4 className="details-title company-title">{MACHINE_TITLE_EMPRESA}</h4>
                <h5 className="details-value company-value">{machine.company}</h5>
            </div>
            <div className="details-wrap">
                <h4 className="details-title class-title">{MACHINE_TITLE_CLASE}</h4>
                <h5 className="details-value class-value">{machine.class}</h5>
            </div>
            <div className="details-wrap">
                <h4 className="details-title state-title">{MACHINE_TITLE_ESTADO}</h4>
                <div className="state-wrap">
                    <MovementIndicator MachinePage moving={machine.moving}/>
                    {machine.moving ? <h5 className="details-value moving-value">En movimiento</h5> : <h5 className="details-value moving-value">Detenido</h5> }
                </div>
            </div>
            <div className="details-wrap">
                <h4 className="details-title last_update-title">{MACHINE_TITLE_ACTUALIZACION}</h4>
                <h5 className="details-value last_update-value">{machine.last_update}</h5>
            </div>
        </div>
    )
}