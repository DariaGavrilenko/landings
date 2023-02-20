import Header from "./Main/Header/Header"
import { Sessions } from "./Main/Sessions"
import NavBar from "./NavBar"
import s from './NavBar.module.css'

const RitmStyle = () =>{
return(
    <div className={s.mainContainer}>
        <NavBar/>
        <Header/>
        <Sessions/>
    </div>
)
}


export default RitmStyle