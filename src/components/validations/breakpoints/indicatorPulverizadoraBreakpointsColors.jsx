import { INDICATOR_TITLE_DERIVA, INDICATOR_TITLE_EVAPORACION, INDICATOR_TITLE_TAPONAMIENTO } from "../../../environment/indicatorsTitles";

export function indicatorPulverizadoraBreakpointsColors(porcentaje) {  

      if(porcentaje === 1.00) return 'breakpoint-0-color'

      if(porcentaje >= 0.80) return 'breakpoint-1-color'

      if(porcentaje >= 0.65) return 'breakpoint-2-color'

      if(porcentaje >= 0.50) return 'breakpoint-35-color'

      if(porcentaje >= 0.30) return 'breakpoint-5-color'

      if(porcentaje > 0.10) return 'breakpoint-8-color'

      if(porcentaje === 0) return 'breakpoint-10-color'

      if(!porcentaje){
        return 'breakpoint-default'
      } 
}