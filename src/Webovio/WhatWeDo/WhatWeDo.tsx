import s from './WhatWeDo.module.css'
import avatar from './img/avatar.png'

const WhatWeDo = () => {
    return (
        <div className={s.WhatWeDoContainer}>
            <div className={s.WhatWeDoTextContainer}>
                <p className={s.WhatWeDoText}>What we do for you</p>
                <h1 className={s.WhatWeDoTitle}>Strategy. Design  Content. Technology Development </h1>
                <p className={s.WhatWeDoText}>There’s no secret sauce, no wizard behind the curtain.
                    What makes Aerolab tick is an interdisciplinary team with a
                    framework that fosters candid collaboration.</p>
                <a href="#" className={s.WhatWeDoLink}>More know About us</a>
            </div>
            <div className={s.WhatWeDoCritiqueContainer}>
                <p className={s.WhatWeDoCritiqueText}>With More than 10 Years of Knowledge and
                    Expertise we Design and Code Websites and Apps,
                    We Build Brands and Help Them Succeed</p>
                <div className={s.WhatWeDoCritiquePersonContainer}>
                    <img src={avatar} alt="Genevieve Rodriquez" className={s.WhatWeDoCritiquePersonAvatar} />
                    <span className={s.WhatWeDoCritiquePersonName}>Genevieve Rodriquez</span>
                    <span className={s.WhatWeDoCritiquePersonStatus}>Founder & CEO, Webovio</span>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo