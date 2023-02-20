import { MutableRefObject, useRef } from "react"
import { Build } from "./Build"
import { Capabilities } from "./Capabilities"
import { Footer } from "./Footer"
import { Headers } from "./Headers"
import { Nav } from "./Nav"
import { Story } from "./Story"


export const Konstrukt = () =>{
    const footerRef = useRef(null)
    return(
        <div className="App">
        <Headers footerRef={footerRef} />
         <Nav />
         <Story />
         <Capabilities />
         <Build />
         <Footer footerRef={footerRef} />
       </div>
    )
}