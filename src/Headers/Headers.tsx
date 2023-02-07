import projecoLogo from './img/projeco-logo.png'
import s from './Headers.module.css'

 const Headers = () => {
    return (
        <div className={s.headersContainer}>
            <img src={projecoLogo} alt="logo" />
            <div className={s.headersTitle}>PARTNER WITH KONSTUCT
            <p className={s.headersText}>An award-winning construction management firm</p>
            </div>
            <a href="#contacts" className={s.headersSkroll}>Skroll down</a>
        </div>
    )
}

export default Headers