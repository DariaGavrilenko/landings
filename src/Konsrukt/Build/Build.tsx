import s from './Build.module.css'

 const Build = () => {
    return (
        <div className={s.buildContainer}>
            <h1 className={s.buildTitle}>Want to build something amazing?</h1>
            <button className={s.buildButton}>GET IN TOUCH</button>
        </div>
    )
}

export default Build