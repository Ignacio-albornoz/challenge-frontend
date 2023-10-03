import { Toaster } from "react-hot-toast"

export function Message( ){

    return(
        <>
            <Toaster 
                position="bottom-center"
                duration={6000}
            />
        </>
    )
}