import { INDICATOR_TITLE_RINDE_HUMEDO, INDICATOR_TITLE_RINDE_SECO } from "../../../environment/indicatorsTitles";

export function indicatorRindeHumeSecoBreakpointsColors(description) {

    const TITLE_RINDE_SECO = INDICATOR_TITLE_RINDE_SECO;
    const TITLE_RINDE_HUMEDO = INDICATOR_TITLE_RINDE_HUMEDO;

    if(description === TITLE_RINDE_SECO){
        return 'rinde-seco-color'
    }


    if(description === TITLE_RINDE_HUMEDO){
        return 'rinde-humedo-color'
    }

    return 'breakpoint-default'
}
