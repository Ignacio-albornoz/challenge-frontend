import { CSSProperties } from 'react';
import ClipLoader from "react-spinners/BarLoader";

const override = CSSProperties = {
    display: "block",
    position: "absolute",
    left: "left: calc(50% - 100px)",
    top: "50%",
};

export function Loader(){

    return(
        <div className='loader-bar-container'>
            <ClipLoader 
                width={200}
                color= "#4980cc"
                cssOverride={override}
                aria-label="loading-spinner"
                className="loader-bar"         
            />
        </div>
    )
}