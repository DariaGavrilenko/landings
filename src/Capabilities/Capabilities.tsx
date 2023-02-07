import s from './Capabilities.module.css'
import bitmap from './img/Bitmap.png'
import bitmap1 from './img/Bitmap1.png'
import bitmap2 from './img/Bitmap2.png'

const Capabilities = () => {
    const text = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.`

    return (
        <div className={s.capabilitiesContainer}>
            <div className={s.capabilitiesHeaderContainer}>
                <h1 className={s.capabilitiesHeaderTitle}>OUR CAPABILITIES</h1>
                <p className={s.capabilitiesHeaderText}>{text}</p>
                <button className={s.capabilitiesHeaderButton}>ALL SERVICES</button>
            </div>
            <div className={s.capabilitiesBodyContainer}>
                <div className={s.capabilitiesBody}>
                    <img src={bitmap} alt="icon" />
                    <h2 className={s.capabilitiesBodyTitle}>PROJECT AND CONSTRUCTION MANAGEMENT</h2>
                    <p className={s.capabilitiesBodyText}>{text}</p>
                </div>
                <div className={s.capabilitiesBody}>
                    <img src={bitmap1} alt="icon" />
                    <h2 className={s.capabilitiesBodyTitle}>STRUCTURE AUDIT AND MAINTENANCE</h2>
                    <p className={s.capabilitiesBodyText}>{text}</p>
                </div>
                <div className={s.capabilitiesBody}>
                    <img src={bitmap2} alt="icon" />
                    <h2 className={s.capabilitiesBodyTitle}>FACTORY CONSTRUCTION AND MODELING</h2>
                    <p className={s.capabilitiesBodyText}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Capabilities