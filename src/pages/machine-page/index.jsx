import { DetailsMachine } from "../../components/details-machine";
import { InformationMachine } from "../../components/infomation-machine";
import { MACHINE_TITLE_CLIMA, MACHINE_TITLE_GENERAL, MACHINE_TITLE_OPERACION } from "../../environment/machineTitles";
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
                    <DetailsMachine machine={machine}/>
                    <div className="information-container">
                        <InformationMachine title={MACHINE_TITLE_GENERAL} data={machine.data.general} />
                        <InformationMachine title={MACHINE_TITLE_CLIMA} data={machine.data.cosecha} />
                        <InformationMachine title={MACHINE_TITLE_OPERACION} data={machine.data.operación} />
                    </div>

                </div>
        </div>
    )
}