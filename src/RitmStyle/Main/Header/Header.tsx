import s from './Header.module.css'

const Header = () =>{
    return(
        <div className={s.headerContainer}>
            <h2 className={s.headerSecondTitle}>Укрепление здоровья</h2>
            <h1 className={s.headerFirstTitle}>Акватерапия RitmStyle</h1>
        </div>
    )
}

export default Header