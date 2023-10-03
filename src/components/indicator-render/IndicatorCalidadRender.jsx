import { useCalidad } from "../../hooks/useCalidad"
import { indicatorPulverizadoraBreakpointsColors } from "../validations/breakpoints/indicatorPulverizadoraBreakpointsColors";

/*Se encarga de renderizar el indicador Calidad y de calcular el porcentaje*/

export const IndicatorCalidadRender = ({content, description}) => {

    const { calcularPorcentaje } = useCalidad(parseFloat(content));

    console.log(parseFloat(content));

    const breakpointColor = indicatorPulverizadoraBreakpointsColors(parseFloat(content));

    const porcentaje = (calcularPorcentaje());

    return(
        <>
            <div className={`indicator-container ${breakpointColor}`} >
                <h5 className="indicator-description indicator-text">
                    {description.charAt(0).toUpperCase() + description.slice(1)}
                </h5>
                <h2 className="indicator-content indicator-text">
                    {parseInt(porcentaje)} %
                </h2>
            </div>
        </>
    )
}