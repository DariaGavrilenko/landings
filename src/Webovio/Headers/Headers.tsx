import logo from './img/Logo.png'
import burger from './img/burger.png'
import andrew from './img/16_Andrew-Porter-Logo.png'
import jalen from './img/17_Jalen-Rose-Leadership-Academy-Logo.png'
import wal from './img/Wal.png'
import ideal from './img/Ideal.png'
import phalen from './img/PhalenLeadership.png'
import s from './Headers.module.css'

const Headers = () => {
    return (
        <div className={s.WebovioHeadersContainer}>
            <div className={s.WebovioLogoContainer}>
                <img src={logo} alt="logo" className={s.WebovioHeadersLogo}/>
                <button className={s.WebovioHeadersBurger}>
                    <img src={burger} alt="burger" />
                </button>
            </div>
            <div className={s.WebovioTextContainer}>
                <p className={s.WebovioHeadersText}>A place where </p>
                <h1 className={s.WebovioHeadersTitle}>A creative agency for redemptive brands</h1>
                <p className={s.WebovioHeadersText}>Anteelo is a leading strategic design firm that builds powerful digital solutions for startups and enterprises.</p>
                <a href="#" className={s.WebovioHeadersLink}>Get in touch</a>
            </div>
            <div className={s.awards}>
                <img src={andrew} alt="andrew award" />
                <img src={jalen} alt="Jalen award" />
                <img src={wal} alt="Wal award" />
                <img src={ideal} alt="Ideal award" />
                <img src={phalen} alt="Phalen award" />
            </div>
        </div>
    )
}

export default Headers