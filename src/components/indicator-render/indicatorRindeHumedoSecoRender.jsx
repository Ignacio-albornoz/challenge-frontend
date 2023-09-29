import { indicatorRindeHumeSecoBreakpointsColors } from "../validations/breakpoints/indicatorRindeHumeSecoBreakpointsColors";

export const indicatorRindeHumedoSecoRender = ({content, description}) => {

    function convertDescriptionToRender(description) {
        const words = description.split("_");
        const descriptionToRender = words.map(word => word.toLowerCase());
        return descriptionToRender.join(" ");
    }

    breakpointColor = indicatorRindeHumeSecoBreakpointsColors(description);

    return(
        <>
            <div className={`indicator-container ${breakpointColor}`} >
                <h5 className="indicator-description indicator-text">
                    {convertDescriptionToRender(description)}
                </h5>
                <h2 className="indicator-content indicator-text indicator-text-sm">
                    {content}
                </h2>
                <h2 className="indicator-content indicator-text indicator-text-sm">
                    kg/ha
                </h2>
            </div>
        </>
    )
}