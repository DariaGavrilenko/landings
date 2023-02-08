import s from './Footer.module.css'
import logo from './img/Logo.png'

const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <div className={s.footerAddressPhoneContainer}>
                <div className={s.footerPhoneContainer}>Phone
                    <p className={s.footerAddressPhoneText}>+32 50 31 28 32</p>
                </div>
                <div className={s.footerAddressContainer}>Address
                    <p className={s.footerAddressPhoneText}>491 Merlin Crest Suite 963</p>
                </div>
            </div>
            <div className={s.footerAllLinksContainer}>
                <div className={s.footerLinksContainer}>
                    <h1 className={s.footerLinksContainerTitle}>Services</h1>
                    <a href="#" className={s.footerLinkTitle}>Strategy Design</a>
                    <a href="#" className={s.footerLinkTitle}>Product Design</a>
                    <a href="#" className={s.footerLinkTitle}>Content Strategy</a>
                    <a href="#" className={s.footerLinkTitle}>Brand Strategy</a>
                    <a href="#" className={s.footerLinkTitle}>Development</a>
                </div>
                <div className={s.footerLinksContainer}>
                    <h1 className={s.footerLinksContainerTitle}>Help And Advice</h1>
                    <a href="#" className={s.footerLinkTitle}>How it works</a>
                    <a href="#" className={s.footerLinkTitle}>Contact Support</a>
                    <a href="#" className={s.footerLinkTitle}>Privacy Policy</a>
                    <a href="#" className={s.footerLinkTitle}>FAQ</a>
                </div>
                <div className={s.footerLinksContainer}>
                    <h1 className={s.footerLinksContainerTitle}>Company</h1>
                    <a href="#" className={s.footerLinkTitle}>About</a>
                    <a href="#" className={s.footerLinkTitle}>Blog</a>
                    <a href="#" className={s.footerLinkTitle}>Contact</a>
                    <a href="#" className={s.footerLinkTitle}>Jobs</a>
                </div>
                <div className={s.footerContactsLinksContainer}>
                    <h1 className={s.footerLinksContainerTitle}>Get in Touch</h1>
                  <p className={s.footerLinkTitle}>Feel free to get in touch with us vai email</p>
                  <h1 className={s.footerMailLink}>info.webovio@gmail.com </h1>
                  <img src="" alt="" />
                </div>
            </div>
            <div className={s.footerRightsContainer}>
                <img src={logo} alt="logo" />
                <p className={s.footerRightsText}>© 2020@webovio. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer