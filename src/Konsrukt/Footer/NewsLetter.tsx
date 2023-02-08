import s from './Footer.module.css'

export const NewsLetter = () =>{
    return(
        <div className={s.newsLetterContainer}>
            <h1 className={s.newsLetterTitle}>Newsletter Signup</h1>
            <input type="text" placeholder='test@youremail.com' className={s.newsLetterInput}/>
            <button className={s.newsLetterButton}>SIGNUP</button>
        </div>
    )
}