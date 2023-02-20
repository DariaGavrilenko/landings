import s from './Sessions.module.css'

const Sessions = () => {
    return (
        <div className={s.sessionsContainer}>
            <h2 className={s.sessionsTitle}>Сеансы RitmStyle</h2>
            <div className={s.sessionsSortsContainer}>
                <div>Стандартный RitmStyle</div>
                <div className={s.sessionsSortsMiniContainer}>
                    <div>RitmStyle для пар</div>
                    <div>RitmStyle для беременных</div>
                </div>
                <div className={s.sessionsSortsMiniContainer}>
                    <div>RitmStyle с полным погружением под воду</div>
                    <div>RitmStyle + красочная подводная фотосессия</div>
                </div>
            </div>
        </div>
    )
}

export default Sessions