import balenciaga from './img/balenciaga.png'
import model3d from './img/model3d.png'
import booking from './img/booking.png'
import AngelAvatar from './img/AngelAvatar.png'
import LanaAvatar from './img/LanaAvatar.png'
import EuniceAvatar from './img/EuniceAvatar.png'
import s from './Projects.module.css'


const Projects = () => {
    return (
        <div>
            <div className={s.awesomeProjectContainer}>
                <h1 className={s.awesomeProjectTitle}>We Have Some Awesome Project.</h1>
                <p className={s.awesomeProjectText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            </div>
            <div className={s.leftProjectContainer}>
                <img src={balenciaga} alt="" className={s.balenciagaProjectImg}/>
                <div className={s.leftProjectDescriptionContainer}>
                    <h1 className={s.ProjectDescriptionTitle}>The wall new Balenciaga.com</h1>
                    <p className={s.ProjectDescriptionText}>This article is floated online with an aim to help you find the best dvd printing solution.</p>
                    <p className={s.ProjectDescriptionText}>Dvd printing is an important feature used by large and small DVD production houses to print information on DVDs.</p>
                    <a href="#" className={s.ProjectDescriptionLink} >See Case Study</a>
                </div>
                <div className={s.ProjectLeftCritiqueContainer} >
                    <p className={s.ProjectCritiqueText} >“In my history of working with trade show vendors,
                        I can honestly say that there is not one company that I've ever worked
                        with that has better service than Exhibit Systems.”</p>
                    <div className={s.ProjectCritiquePersonContainer}>
                        <img src={AngelAvatar} alt="Angel Armstrong" className={s.ProjectCritiquePersonImg}/>
                        <span className={s.ProjectCritiquePersonName}>Angel Armstrong</span>
                        <span className={s.ProjectCritiquePersonStatus}>Founder & CEO, Google</span>
                    </div>
                </div>
            </div>
            <div  className={s.model3dProjectContainer}>
                <div className={s.model3dProjectDescriptionContainer}>
                    <h1 className={s.ProjectDescriptionTitle}>Is this the future of 3D model?</h1>
                    <p className={s.ProjectDescriptionText}>While it was just a TV show, that little speech at the beginning of the original Star
                        Trek show really did do a good job of capturing our feelings about space.</p>
                    <p className={s.ProjectDescriptionText}>It is those feelings that drive our love of astronomy and our desire to learn more and more about it.</p>
                    <a href="#" className={s.ProjectDescriptionLink} >See Case Study</a>
                </div>
                <img src={model3d} alt="" />
                <div className={s.ProjectModel3dCritiqueContainer} >
                    <p className={s.ProjectCritiqueText} >“I know they are going to be honest with me. I am not going to get a subpar product;
                        I know it is going to be good. That is the number one advantage of working with Exhibit Systems.</p>
                    <div className={s.ProjectCritiquePersonContainer}>
                        <img src={LanaAvatar} alt="Lina Hart" className={s.ProjectCritiquePersonImg} />
                        <span className={s.ProjectCritiquePersonName}>Lina Hart</span>
                        <span className={s.ProjectCritiquePersonStatus}>Founder & CEO, Jico</span>
                    </div>
                </div>
            </div>
            <div className={s.leftProjectContainer}>
                <img src={booking} alt="" />
                <div className={s.leftProjectDescriptionContainer}>
                    <h1 className={s.ProjectDescriptionTitle}> Is this the future of Online Booking</h1>
                    <p className={s.ProjectDescriptionText}>You should be able to find several indispensable facts about motivation in the following paragraphs.</p>
                    <p className={s.ProjectDescriptionText}>If there’s at least one fact you didn’t know before, imagine the difference it might make.</p>
                    <a href="#" className={s.ProjectDescriptionLink}>See Case Study</a>
                </div>
                <div className={s.ProjectLeftCritiqueContainer} >
                    <p className={s.ProjectCritiqueText}>“Exhibit Systems is not a provider. They are not a supplier.
                        They are a partner with expertise in making trade shows effective.”</p>
                    <div className={s.ProjectCritiquePersonContainer}>
                        <img src={EuniceAvatar} alt="Eunice Oliver" className={s.ProjectCritiquePersonImg}/>
                        <span className={s.ProjectCritiquePersonName}>Eunice Oliver</span>
                        <span className={s.ProjectCritiquePersonStatus}>Founder & CEO, Zeem</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects