import { INDICATOR_TITLE_DERIVA, INDICATOR_TITLE_EVAPORACION, INDICATOR_TITLE_TAPONAMIENTO } from "../../../environment/indicatorsTitles";

export function indicatorPulverizadoraBreakpointsColors(porcentaje, description) {  

  const TITLE_EVAPORACION = INDICATOR_TITLE_EVAPORACION;
  const TITLE_TAPONAMIENTO = INDICATOR_TITLE_TAPONAMIENTO;
  const TITLE_DERIVA = INDICATOR_TITLE_DERIVA;

  if(description === TITLE_EVAPORACION || description === TITLE_DERIVA || description === TITLE_TAPONAMIENTO){

      if(porcentaje === 100) return 'breakpoint-0-color'

      if(porcentaje >= 70) return 'breakpoint-1-color'

      if(porcentaje >= 50) return 'breakpoint-2-color'

      if(porcentaje >= 35) return 'breakpoint-35-color'

      if(porcentaje >= 20) return 'breakpoint-5-color'

      if(porcentaje > 0) return 'breakpoint-8-color'

      if(porcentaje === 0) return 'breakpoint-10-color'

    }

    return 'breakpoint-default'
}