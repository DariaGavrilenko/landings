import s from './Footer.module.css'

const Footer = () => {
return (
    <div className={s.footerContainer} id='down'>
        <div className={s.footerMainContainer}>
            <div className={s.footerLogoContainer}>
                <h1 className={s.footerLogo}>MNTN</h1>
                <p className={s.footerText}>Get out there & discover your next slope, mountain & destination!</p>
                <p className={s.footerRhith}>Copyright 2019 MNTN, Inc. Terms & Privacy</p>
            </div>
            <div className={s.footerLinksContainer}>
                <div className={s.footerBlogLinksContainer}>
                    <h3 className={s.footerLinksTitle}>More on The Blog</h3>
                    <a href="#" className={s.footerLink}>About MNTN</a>
                    <a href="#" className={s.footerLink}>Contributors & Writers</a>
                    <a href="#" className={s.footerLink}>Write For Us</a>
                    <a href="#" className={s.footerLink}>Contact Us</a>
                    <a href="#" className={s.footerLink}>Privacy Policy</a>
                </div>
                <div className={s.footerMNTNLinksContainer}>
                    <h3 className={s.footerLinksTitle}>More on MNTN</h3>
                    <a href="#" className={s.footerLink}>The Team</a>
                    <a href="#" className={s.footerLink}>Jobs</a>
                    <a href="#" className={s.footerLink}>Press</a>
                </div>
            </div>
        </div>
    </div>
)
}

export default Footer