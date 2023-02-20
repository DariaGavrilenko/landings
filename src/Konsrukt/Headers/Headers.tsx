import projecoLogo from './img/projeco-logo.png'
import s from './Headers.module.css'
import { Link } from 'react-router-dom'
import { MutableRefObject } from 'react'

type HeaderPropsType={
    footerRef: MutableRefObject<null>
}

 const Headers = ({footerRef}:HeaderPropsType) => {

    const handleScroll = (ref:any) => {
        console.log('hey')
            window.scrollTo({
              top: ref.offsetTop,
              left: 0,
              behavior: "smooth",
            });
          };

    return (
        <div className={s.headersContainer}>
            <img src={projecoLogo} alt="logo" />
            <div className={s.headersTitle}>PARTNER WITH KONSTUCT
            <p className={s.headersText}>An award-winning construction management firm</p>
            </div>
            <Link to="#contacts" className={s.headersSkroll} onClick={()=>{handleScroll(footerRef.current)}}>Skroll down</Link>
        </div>
    )
}

export default Headers