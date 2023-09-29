import { INDICATOR_TITLE_CALIDAD } from "../../../environment/indicatorsTitles";

 export function IndicatorCalidadBreakpointColor(porcentaje, description) {

    /* CALIDAD */
    const TITLE_CALIDAD = INDICATOR_TITLE_CALIDAD;

    if(description === TITLE_CALIDAD){
        if(porcentaje === 100) return 'breakpoint-10-color'

        if(porcentaje >= 70) return 'breakpoint-8-color'

        if(porcentaje >= 50) return 'breakpoint-5-color'

        if(porcentaje >= 35) return 'breakpoint-35-color'

        if(porcentaje > 20) return 'breakpoint-2-color'

        if(porcentaje >= 0.1) return 'breakpoint-1-color'

        if(porcentaje === 0) return 'breakpoint-0-color'

        return 'breakpoint-default'
    }
}