export function calidadBreakPointsColors(porcentaje, description) {

    /*TITLES */

    const TITLE_CALIDAD = 'calidad';
    const TITLE_EVAPORACION = 'evaporacion';
    const TITLE_TAPONAMIENTO = 'taponamiento';
    const TITLE_DERIVA = 'deriva';
    const TITLE_RINDE_SECO = 'rinde_seco';
    const TITLE_RINDE_HUMEDO = 'rinde_humedo';

    console.log(porcentaje);

    console.log(description);

    /* CALIDAD */
    if(description === TITLE_CALIDAD){
        console.log('CALIDAD');
        if(porcentaje === 100) return 'breakpoint-10-color'
    
        if(porcentaje >= 70) return 'breakpoint-8-color'
    
        if(porcentaje >= 50) return 'breakpoint-5-color'
    
        if(porcentaje >= 35) return 'breakpoint-35-color'
    
        if(porcentaje > 20) return 'breakpoint-2-color'
    
        if(porcentaje >= 0.1) return 'breakpoint-1-color'
    
        if(porcentaje === 0) return 'breakpoint-0-color'

        return 'breakpoint-default'
    }


    if(description === TITLE_EVAPORACION || description === TITLE_DERIVA || description === TITLE_TAPONAMIENTO){
        console.log('lO DEMAS');

        if(porcentaje === 100) return 'breakpoint-0-color'
    
        if(porcentaje >= 70) return 'breakpoint-1-color'
    
        if(porcentaje >= 50) return 'breakpoint-2-color'
    
        if(porcentaje >= 35) return 'breakpoint-35-color'
    
        if(porcentaje > 20) return 'breakpoint-5-color'
    
        if(porcentaje >= 0.1) return 'breakpoint-8-color'
    
        if(porcentaje === 0) return 'breakpoint-10-color'

        return 'breakpoint-default'
    }

    if(description === TITLE_RINDE_SECO){
        return 'rinde-seco-color'
    }


    if(description === TITLE_RINDE_HUMEDO){
        return 'rinde-humedo-color'
    }



    return 'breakpoint-default'
}
