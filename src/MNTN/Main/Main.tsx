import s from './Main.module.css'
import { content } from './Constant'

const Main = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.mainItemsContainer}>
                <Item number={content.first.number}
                    liltleTitle={content.first.litleTitle}
                    mainTitle={content.first.mainTitle}
                    img={content.first.img}
                    text={content.first.text} />
                <Item number={content.second.number}
                    liltleTitle={content.second.litleTitle}
                    mainTitle={content.second.mainTitle}
                    img={content.second.img}
                    text={content.second.text} />
                <Item number={content.third.number}
                    liltleTitle={content.third.litleTitle}
                    mainTitle={content.third.mainTitle}
                    img={content.third.img}
                    text={content.third.text} />
            </div>
        </div>
    )
}

type ItemProps = {
    number: string
    liltleTitle: string
    mainTitle: string
    text: string
    img: string
}

const Item = ({ number, liltleTitle, mainTitle, text, img }: ItemProps) => {
    return (
        <div className={s.mainItemContainer}>
            <div className={s.mainItemTextContainer}>
                <div className={s.mainItemNumber}>{number}</div>
                <p className={s.mainItemLitleContainer}>{liltleTitle}</p>
                <h2 className={s.mainItemMainTitle}>{mainTitle}</h2>
                <p className={s.mainItemText}>{text}</p>
                <a href="#" className={s.mainItemLink}>read more</a>
            </div>
            <div className={s.mainItemImgContainer}>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Main