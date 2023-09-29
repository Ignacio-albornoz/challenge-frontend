import './styles.css';
import { IndicatorPulverizadoraRender } from '../indicator-render/IndicatorPulverizadoraRender';



function Indicator({ description, content}) {

    //<IndicatorCalidadRender content={content} description={description} />
    return(
    <>
        <IndicatorPulverizadoraRender content={content} description={description}/>
    </>

    )
}

export { Indicator };