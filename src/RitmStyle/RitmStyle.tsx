import { About } from "./Main/About"
import { Comments } from "./Main/Comments"
import { Cost } from "./Main/Cost"
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
        <Comments/>
        <About/>
        <Cost/>
    </div>
)
}


export default RitmStyle