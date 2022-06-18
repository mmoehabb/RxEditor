import { useAnimate } from 'react-animation-maker'
import {
    ZoomIn, SlideInTop
} from 'react-animation-maker'
import getStyle from '../style/GetStartedSectionStyle';
import Button from '../../../MiniComponents/Button';


interface Props {
    onGetStart?: Function;
    onLoadFile?: Function;
    playAnim?: boolean;
}

const GetStartedSection = (props: Props) => {
    const style = getStyle();

    const [TopDiv, setTopDivAnim] = useAnimate(
        props.playAnim ? SlideInTop : {}
    );
    const [BtnAnim, setBtnDivAnim] = useAnimate(
        props.playAnim ? ZoomIn : {}
    );

    const getStartedHandler = () => {
        window.location.pathname = "/CreateContent";
    }

    const loadFileHandler = () => {
        setTopDivAnim({from: {}, to: []});
        setBtnDivAnim({from: {}, to: []});
        if (props.onLoadFile) props.onLoadFile();
    }

    return (
    <div style={style.root}>
        <TopDiv style={style.topDiv.root}>
            <label style={style.topDiv.title}>
                Create Your Blogs Easly with RxEditor
            </label>
            <p style={style.topDiv.p}>
                RxEditor is an open-source static web applciation, that gives users the facility to
                write and design their own web blogs, slides, articles or even books, by using HTML.
                Technically, the users data (HTML Nodes) is saved, in an abstract form, as JSON file.
                Which can be loaded by the app to be viewed, edited, or exported as a pdf file with 
                the desired style (normal, slide,... etc).
            </p>
        </TopDiv>

        <div style={style.btnsDiv}>
            <BtnAnim style={style.btnContainer}
            durations={['750ms']} 
            delay={1000}>
                <Button 
                    style={style.startBtn}
                    label={"Get Started"} 
                    onClick={getStartedHandler}
                />
            </BtnAnim>

            <BtnAnim style={style.btnContainer}
            durations={['750ms']} 
            delay={1750}>
                <Button 
                    style={style.loadBtn}
                    label={"Load File"} 
                    onClick={loadFileHandler}
                />
            </BtnAnim>
        </div>
    </div>
    );
}

export default GetStartedSection;