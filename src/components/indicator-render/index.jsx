import './styles.css';
import { calidadBreakPointsColors } from '../validations/breakpoints/indicatorRindeHumeSecoBreakpointsColors';

function IndicatorCalidad({ description = 'Taponamiento', content = 0.4}) {

    const { calcularPorcentaje } = useCalidad(parseFloat(content));

    const breakpointColor = calidadBreakPointsColors(calcularPorcentaje(), description)

    const indicatorCalidadRender = () => {
        <>
        <div className={`indicator-container ${breakpointColor}`} >
            <h5 className="indicator-calidad-description indicator-text">
                Calidad
            </h5>
            <h2 className="indicator-calidad-content indicator-text">
                {parseInt(calcularPorcentaje())} %
            </h2>
        </div>
    </>
    }

    return(
    <>
        <div className={`indicator-container ${breakpointColor}`} >
            <h5 className="indicator-description indicator-text">
                {description}
            </h5>
            <h2 className="indicator-content indicator-text">
                {description === 'calidad' ? parseInt(calcularPorcentaje()) : parseInt(calcularPorcentaje())} %
            </h2>
        </div>
    </>

    )
}

export { IndicatorCalidad };