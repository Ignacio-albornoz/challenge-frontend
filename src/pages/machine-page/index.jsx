import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsMachine } from "../../components/details-machine";
import { InformationMachine } from "../../components/infomation-machine";
import {useMachines} from "../../hooks/useMachines"

import { MACHINE_TITLE_CLIMA, MACHINE_TITLE_GENERAL, MACHINE_TITLE_OPERACION } from "../../environment/machineTitles";


import "./styles.css"



export function MachinePage(){

    const { id } = useParams();

    const { searchMachineById, machine, loading} = useMachines(id);

    useEffect(() => {
     
        searchMachineById();

    }, [id])



    return(

        <div className="machine-page-container">
            { !loading && machine ?
            <div className="machine-details-card-container">
                <div className="machine-page-header">
                    <h2 className="machine-page-description">{machine.description}</h2>
                    <h2 className="machine-page-chassis">{machine.chassis}</h2>
                </div>
                <div className="machine-page-details-container">
                    <DetailsMachine machine={machine}/>
                    <div className="machine-page-information-container">
                        { machine.data.general !== undefined | null? <InformationMachine title={MACHINE_TITLE_GENERAL} data={machine.data.general} /> : null }
                        { machine.data.clima !== undefined | null? <InformationMachine title={MACHINE_TITLE_CLIMA} data={machine.data.clima}/> : null }
                        { machine.data.operación !== undefined | null? <InformationMachine title={MACHINE_TITLE_OPERACION} data={machine.data.operación} /> : null }
                    </div>
                </div>
            </div> : <h1>Loading!</h1>
            }
        </div>
    )
}