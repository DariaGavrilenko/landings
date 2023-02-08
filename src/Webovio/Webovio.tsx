import { Headers } from "./Headers"
import { Prooject } from "./Projects"
import { WhatWeDo } from "./WhatWeDo"
import { Ideation } from "./Ideation"
import { Footer } from "./Footer"

export const Webovio = () =>{
    return (
        <div>
            <Headers/>
            <WhatWeDo/>
            <Prooject/>
            <Ideation/>
            <Footer/>
        </div>
    )
}