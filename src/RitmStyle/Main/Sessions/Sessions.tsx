import s from './Sessions.module.css'

const Sessions = () => {
    return (
        <div className={s.sessionsContainer}>
            <h2 className={s.sessionsTitle}>Сеансы RitmStyle</h2>
            <div className={s.sessionsSortsContainer}>
                <div className={s.sessionsSorts}>Стандартный RitmStyle</div>
                <div className={s.sessionsSortsMiniContainer}>
                    <div className={s.sessionsSortsMini}>RitmStyle для пар</div>
                    <div className={s.sessionsSortsMini}>RitmStyle для беременных</div>
                </div>
                <div className={s.sessionsSortsMiniContainer}>
                    <div className={s.sessionsSortsMini}>RitmStyle с полным погружением под воду</div>
                    <div className={s.sessionsSortsMini}>RitmStyle + красочная подводная фотосессия</div>
                </div>
            </div>
        </div>
    )
}

export default Sessions