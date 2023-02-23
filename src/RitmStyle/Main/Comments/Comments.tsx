import s from './Comments.module.css'
import { register } from 'swiper/element/bundle';
import { SwiperWrapper } from './Swiper';


register();

const Comments = () => {
    return (
        <div className={s.coomentsComponentsContainer}>
            <h2 className={s.commentsTitle}>Отзывы</h2>
            <div className={s.commentsWindow}>
                <SwiperWrapper />
            </div>
        </div>
    )
}

export default Comments
