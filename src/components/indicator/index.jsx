import './styles.css';
/* Environment*/
import { INDICATOR_TITLE_CALIDAD, INDICATOR_TITLE_CULTIVO, INDICATOR_TITLE_DERIVA, INDICATOR_TITLE_EVAPORACION, INDICATOR_TITLE_HUMEDAD_GRANO, INDICATOR_TITLE_RINDE_HUMEDO, INDICATOR_TITLE_RINDE_SECO, INDICATOR_TITLE_TAPONAMIENTO } from '../../environment/indicatorsTitles';


/* Components */
/* Components */
import { IndicatorRindeHumedoSecoRender } from '../indicator-render/indicatorRindeHumedoSecoRender';
import { IndicatorCalidadRender } from '../indicator-render/IndicatorCalidadRender';
import { IndicatorCultivoRender } from '../indicator-render/IndicatorCultivoRender';
import { IndicatorHumedadGrano } from '../indicator-render/indicatorHumedadGrano';
import { DefaultIndicator } from '../indicator-render/defaultIndicator';
import { IndicatorPulverizadoraRender } from '../indicator-render/indicatorPulverizadoraRender';


function Indicator({description, content}) {

    console.log('description, content');

    const TITLE_CALIDAD = INDICATOR_TITLE_CALIDAD
    const TITLE_TAPONAMIENTO = INDICATOR_TITLE_TAPONAMIENTO
    const TITLE_DERIVA = INDICATOR_TITLE_DERIVA
    const TITLE_EVAPORACION = INDICATOR_TITLE_EVAPORACION
    const TITLE_HUMEDAD_GRANO = INDICATOR_TITLE_HUMEDAD_GRANO
    const TITLE_RINDE_HUMEDO = INDICATOR_TITLE_RINDE_HUMEDO
    const TITLE_RINDE_SECO = INDICATOR_TITLE_RINDE_SECO
    const TITLE_CULTIVO = INDICATOR_TITLE_CULTIVO
    

    return(
    <>  
        { description === TITLE_TAPONAMIENTO ? <IndicatorPulverizadoraRender content={content} description={description}/> : null}
        { description === TITLE_DERIVA ? <IndicatorPulverizadoraRender content={content} description={description}/> : null}
        { description === TITLE_EVAPORACION ? <IndicatorPulverizadoraRender content={content} description={description}/> : null}
        { description === TITLE_RINDE_HUMEDO ? <IndicatorRindeHumedoSecoRender content={content} description={description}/> : null}
        { description === TITLE_RINDE_SECO ? <IndicatorRindeHumedoSecoRender content={content} description={description}/> : null}
        { description === TITLE_CALIDAD ? <IndicatorCalidadRender content={content} description={description}/> : null }
        { description === TITLE_CULTIVO ? <IndicatorCultivoRender content={content} description={description}/> : null }
        { description === TITLE_HUMEDAD_GRANO ? <IndicatorHumedadGrano content={content} description={description}/> : null }
        { description ? null : <DefaultIndicator />}

    </>

    )
}

export { Indicator };