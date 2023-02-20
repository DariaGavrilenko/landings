import { Link } from "react-router-dom"
import logo from './img/logo.png'
import s from './NavBar.module.css'

const NavBar = () => {
    return (
            <div className={s.navBarContainer}>
                <img src={logo} alt="logo" />
                <div className={s.linksContainer}>
                    <Link to={''} className={s.link}>Главная</Link>
                    <Link to={''} className={s.link}>Сеансы</Link>
                    <Link to={''} className={s.link}>Отзывы</Link>
                    <Link to={''} className={s.link}>Контакты</Link>
                    <Link to={''} className={s.link}>Новости</Link>
                    <Link to={''} className={s.link}>Обо мне</Link>
                    <Link to={''} className={s.link}>Блог</Link>
                </div>
                <button className={s.navBarButton}>Записаться на сеанс</button>
            </div>
    )
}

export default NavBar