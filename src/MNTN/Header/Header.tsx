import s from './Headers.module.css'
import account from './img/Account.png'
import instagram from './img/Vector.png'
import twitter from './img/twitter.png'

 const Header = () => {
    return (
        <div className={s.HeaderContainer}>
            <div className={s.HeaderBG}></div>
            <div className={s.HeaderCloudsBG}></div>
            <div className={s.HeaderMountBG}></div>
            <div className={s.HeaderViewBG}></div>
            <div className={s.HeaderNavContainer}>
                <span className={s.MNTNLogo}>MNTN</span>
                <div>
                    <a href="#" className={s.HeaderLink} >Equipment</a>
                    <a href="#" className={s.HeaderLink}>About as</a>
                    <a href="#" className={s.HeaderLink}>Blog</a>
                </div>
                <img src={account} alt="" />
            </div>
            <div className={s.HeaderMainTextContainer}>
                <p className={s.HeaderMainText}>a hiking guid</p>
                <h1 className={s.HeaderMainTitle}>Be prepared for the Mountains and beyond!</h1>
                <a href="#down" className={s.HeaderMainLink}>skroll down</a>
            </div>
            <div className={s.followUsContainer}>
                <p className={s.followUsText}>Follow us</p>
                <a href="#">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="#">
                    <img src={twitter} alt="twitter" />
                </a>
            </div>
            <div className={s.HeaderDownContainer}></div>
        </div>
    )
}

export default Header