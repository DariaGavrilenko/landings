import s from './Ideation.module.css'

const Ideation = () => {
    return (
        <div className={s.IdeationContainer}>
            <h1 className={s.IdeationTitle}>Ideation & Evaluation - Best Way to Kick off Your Product Idea</h1>
            <div className={s.IdeationItemsContainer}>
                <div className={s.IdeationItemContainer}>
                    <h2 className={s.IdeationItemTitle}>Product Design Sprint</h2>
                    <p className={s.IdeationItemText}>A five-day workshop that will help you answer crucial business questions</p>
                    <a href="#" className={s.IdeationItemLink}>Read More</a>
                </div>
                <div className={s.IdeationItemContainer}>
                    <h2 className={s.IdeationItemTitle}>Scoping Session</h2>
                    <p className={s.IdeationItemText}>A workshop aimed at shaping your business idea, answering questions regarding project planning</p>
                    <a href="#" className={s.IdeationItemLink}>Read More</a>
                </div>
                <div className={s.IdeationItemContainer}>
                    <h2 className={s.IdeationItemTitle}>UX<br></br> Review</h2>
                    <p className={s.IdeationItemText}>An evaluation which will help you radically improve your product.</p>
                    <a href="#" className={s.IdeationItemLink}>Read More</a>
                </div>
                <div className={s.IdeationItemContainer}>
                    <h2 className={s.IdeationItemTitle}>Code Review</h2>
                    <p className={s.IdeationItemText}>Do you know what one of the key secrets of success
                        is what makes people successful in business</p>
                    <a href="#" className={s.IdeationItemLink}>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Ideation