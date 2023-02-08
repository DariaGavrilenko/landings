import s from './Story.module.css'


 const Story = () => {
    const mainText = `Founded in 2011 by John Mathew Smith, Konstruct has become 
    the number one construction management firm`
    const secondText = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.`

    return (
        <div className={s.StoryContainer}>   
            <h1 className={s.StoryTitle}>OUR STORY</h1>
            <div className={s.StoryMainContainer}>
            <div className={s.StoryTextContainer}>
                <div className={s.StoryMainText}>{mainText}</div>
                <div className={s.StorySecondText}>{secondText}</div>
            </div>
            <div className={s.StoryImgContainer}>
                <div className={s.StoryPlanImg}>WE PLAN</div>
                <div className={s.StoryManageImg}>WE MANAGE</div>
                <div className={s.StoryBuildImg}>WE BUILD</div>
            </div>
            </div>
        </div>
    )
}

export default Story