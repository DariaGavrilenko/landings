import certificate from '../img/certificate.png'
import s from './Cost.module.css'

const Cost = () => {
    return (
        <div className={s.costContainer}>
            <h2 className={s.costTitle}>Стоимость сеансов</h2>
            <div className={s.contentContainer}>
                <ul className={s.costList}>
                    <li>RitmStyle с погружением
                        <span>1000р.</span>
                    </li>
                    <li>Абонемент на RitmStyle
                        <span>5500р.</span>
                    </li>
                    <li>RitmStyle для пар
                        <span>6000р.</span>
                    </li>
                    <li>RitmStyle для беременных
                        <span>13500р.</span>
                    </li>
                    <li>RitmStyle +  фотосессия
                        <span>11500р.</span>
                    </li>
                </ul>
                <div className={s.certficateContainer}>
                    <img src={certificate} alt="certificate" className={s.certficateImg}/>
                    <span className={s.certficateText}>Подарочный сертификат </span>
                </div>

            </div>
        </div>
    )
}

export default Cost