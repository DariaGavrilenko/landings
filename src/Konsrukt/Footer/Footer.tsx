import { NewsLetter } from "./NewsLetter"
import s from './Footer.module.css'
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import googleIcon from './img/google.svg'
import logo from './img/projeco-logo.png'
import { MutableRefObject } from "react"

type FooterPropsType={
    footerRef:string | MutableRefObject<null>
}

 const Footer = ({footerRef}:FooterPropsType) => {
    const text =`Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
     sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.`
    return (
        <div id="contacts" className={s.footerMainContainer} ref={footerRef}>
            <NewsLetter />
            <div className={s.footerContactsContainer}>
                <div className={s.footerContactsInfoContainer}>
                    <h3 className={s.footerContactsTitle}>COMPANY</h3>
                    <img src={logo} alt="logo" className={s.footerContactsLogo}/>
                    <p className={s.footerContactsText}>{text}</p>
                </div>
                <div className={s.footerContactsInfoContainer}>
                    <h3 className={s.footerContactsTitle}>LINKS</h3>
                    <div className={s.footerContactsLinksContainer}>
                        <div className={s.footerContactsLinkContainer}>
                            <a href="#">HOME</a>
                            <a href="#">ABOUT</a>
                            <a href="#">SERVICES</a>
                            <a href="#">PROJECTS</a>
                            <a href="#">CONTACT US</a>
                        </div>
                        <div className={s.footerContactsLinkContainer}>
                            <a href="#">FAQ</a>
                            <a href="#">TERMS</a>
                            <a href="#">CAREERS</a>
                        </div>
                        <div className={s.footerContactsLinkContainer}>
                            <a href="#">BLOG</a>
                            <a href="#">PARTNERS</a>
                            <a href="#">NEWS</a>
                        </div>
                    </div>
                </div>
                <div className={s.footerContactsInfoContainer}>
                    <h3 className={s.footerContactsTitle}>CONTACT US</h3>
                    <p>213 Baker Street Oriel City Kounty 7000 KNW, Country Name</p>
                    <p>+23 994 233 4022</p>
                    <p>info@konstruct.com</p>
                </div>
                <div className={s.footerContactsIconContainer}>
                    <a href="#">
                        <img src={facebook} alt="facebook" className={s.footerContactsIcon} />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="twitter" className={s.footerContactsIcon} />
                    </a>
                    <a href="#">
                        <img src={googleIcon} alt="google" className={s.footerContactsIcon} />
                    </a>
                </div>
            </div>
            <div className={s.footerDesign}>
            © 2017 Konstruct Inc. Designed by Jane Kathryn Teo
            </div>
        </div>
    )
}

export default Footer