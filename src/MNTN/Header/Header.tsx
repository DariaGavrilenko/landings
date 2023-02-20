import s from './Headers.module.css'
import account from './img/Account.png'
import instagram from './img/Vector.png'
import twitter from './img/twitter.png'
import { MutableRefObject } from 'react'
import { Link } from 'react-router-dom'

type HeaderPropsType={
    footerRef: MutableRefObject<null>
}

 const Header = ({footerRef}:HeaderPropsType) => {

  const handleScroll = (ref:any) => {
    console.log('hey')
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      };
      

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
                <Link to="#down" className={s.HeaderMainLink} onClick={()=>{handleScroll(footerRef.current)}}>skroll down</Link>
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