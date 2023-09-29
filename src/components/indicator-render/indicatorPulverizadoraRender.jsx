import { indicatorPulverizadoraBreakpointsColors } from "../validations/breakpoints/indicatorPulverizadoraBreakpointsColors";
import { usePulverizadoraIndicator } from "../../hooks/usePulverizadoraIndicator"


export const IndicatorPulverizadoraRender = ({content, description}) => {

    const { calcularPorcentaje } = usePulverizadoraIndicator((content));
    

    const breakpointColor = indicatorPulverizadoraBreakpointsColors(calcularPorcentaje(), description);

    const porcentaje = parseInt(calcularPorcentaje());

    return(
        <>
            <div className={`indicator-container ${breakpointColor}`} >
                <h5 className="indicator-description indicator-text">
                    {description.charAt(0).toUpperCase() + description.slice(1)}
                </h5>
                <h2 className="indicator-content indicator-text">
                    {porcentaje} %
                </h2>
            </div>
        </>
    )
}