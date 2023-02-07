import konstrukt from './img/projeco-logo-black.png'
import s from './Nav.module.css'

 const Nav = () => {
    return (
        <div className={s.navContainer}>
            <div className={s.contentContainer}>
                <img src={konstrukt} alt="logo" />
                <div>
                    <a href="#" className={s.navLink}>HOME</a>
                    <a href="#" className={s.navLink}>ABOUT</a>
                    <a href="#" className={s.navLink}>SERVICES</a>
                    <a href="#" className={s.navLink}>WORK</a>
                    <a href="#" className={s.navLink}>CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default Nav