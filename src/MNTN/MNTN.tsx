import { useRef } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Main } from "./Main"

export const MNTN = () => {
    const footerRef = useRef(null)
    return (
        <>
            <Header footerRef={footerRef} />
            <Main />
            <Footer footerRef={footerRef}/>
        </>

    )
}