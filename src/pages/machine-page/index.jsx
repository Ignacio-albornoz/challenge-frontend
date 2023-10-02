import { ListOfIndicators } from "../../components/list-of-indicators";
import { MovementIndicator } from "../../components/movement-indicator/movementIndicator";
import { MACHINE_TITLE_ACTUALIZACION, MACHINE_TITLE_CLASE, MACHINE_TITLE_CLIMA, MACHINE_TITLE_EMPRESA, MACHINE_TITLE_ESTADO, MACHINE_TITLE_GENERAL, MACHINE_TITLE_OPERACION } from "../../environment/machineTitles";
import machineJson from "../../mocks/machine.json"

import "./styles.css"


export function MachinePage(){

    const machine = machineJson;

    console.log(machine);

    return(
        <div className="machine-container">
            <div className="machine-header">
                <h2 className="description">{machine.description}</h2>
                <h2 className="chassis">{machine.chassis}</h2>
            </div>
                <div className="machine-details-container">
                    <div className=".details-content">
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
                    <div className="information-container">
                        <div className="information-table">
                            <div className="information-header">
                                <div className="information-title">
                                    <h4>{MACHINE_TITLE_GENERAL}</h4>
                                </div>
                            </div>
                            <div className="information-content">
                                <h5 className="information-value" >key</h5>
                                <h5 className="information-value" >value</h5>
                            </div>
                        </div>                                               
                    </div>
                </div>
        </div>
    )
}