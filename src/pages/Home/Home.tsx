import { useState } from 'react'
import { useAnimate } from 'react-animation-maker'
import 
    {FadeIn, FadeOut, SlideOutRight, SlideInDown, SlideInRight} 
from 'react-animation-maker'
import illustration from './media/illustration.svg'

import getStyle from './style/HomeStyle'

import GetStartedSection from './components/GetStartedSection'
import LoadFileSection from './components/LoadFileSection'

const Home = () => {
    const style = getStyle();

    const [childAnim, setChildAnim] = useState(true);
    
    const [Illustration] = useAnimate(SlideInDown);
    const [GsAnim, setGsAnim] = useAnimate(FadeIn);
    const [LfAnim, setLfAnim] = useAnimate({from: {opacity: 0}, to: []});

    const loadFileAnimationHandler = () => {
        setGsAnim(SlideOutRight);
        setLfAnim(FadeIn);
        setChildAnim(false);
    }

    const backAnimationHandler = () => {
        setGsAnim(SlideInRight);
        setLfAnim(FadeOut);
    }

    return (
        <div style={style.root}>
            <Illustration style={style.illustration}>
                <img 
                    src={illustration}
                    width='100%'
                    alt=""
                />
            </Illustration>

            <GsAnim style={{...style.animContainer, zIndex: 2}}>
                <GetStartedSection
                    onLoadFile={loadFileAnimationHandler} 
                    playAnim={childAnim}
                />
            </GsAnim>

            <LfAnim  style={{...style.animContainer, zIndex: 1}}>
                <LoadFileSection onBack={backAnimationHandler} />
            </LfAnim>
        </div>
    );
}

export default Home;