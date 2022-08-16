import { useState } from "react"
import useDataManager from "../../scripts/useDataManager"
import loadFromHeader from "../../scripts/loadFromHeader"

import getStyle from "./style/MainStyle"
import mediaQuery from "../../scripts/mediaQuery"

import { useAnimate } from 'react-animation-maker'
import { SlideInDown, SlideOutDown } from 'react-animation-maker'

import Navigation from "../../features/Navigation/Navigation"
import SectionView from "./components/SectionView"
import HeadlineView from "./components/HeadlineView"
import TopicView from "./components/TopicView"
import Button from "../../MiniComponents/Button"
import exportAsJSON from "../../features/Exports/exportAsJSON"
import exportAsPDF from "../../features/Exports/exportAsPDF"


const CreateContent = () => {
    const style = getStyle();
    
    const DM = useDataManager();

    const [navVisibility, setNavVisibility] = useState(true);
    const [firstRender, setFirstRender] = useState(true);
    const [ExportsDiv, setExportsAnim] = useAnimate({from: SlideInDown.from, to: []});

    const showNav = () => {
        setNavVisibility(true);
    }
    const hideNav = () => {
        if (mediaQuery('(max-width: 768px)'))
            setNavVisibility(false);
    }

    const showExportsBtns = () => {
        setExportsAnim(SlideInDown);
    }

    // Load json file, if a fileURL is given in window.location
    if (firstRender) {
        loadFromHeader(DM, 'fileURL');
        setFirstRender(false);
    }
    
    return (
        <div style={style.mainDiv}>
            <Navigation 
                DM={DM}
                onShow={() => showNav()}
                hidden={!navVisibility}>
                <Button 
                    mainStyle={style.exportBtn('#10ac84').default} 
                    hoverStyle={style.exportBtn('').hover}
                    label={"Export"} 
                    onClick={() => showExportsBtns()}
                />  
            </Navigation> 

            <div style={style.contentDiv} onClick={() => hideNav()}>
                {
                DM.getSelections().sections > -1 ?
                    <SectionView DM={DM} />
                : 
                DM.getSelections().headlines > -1 ?
                    <HeadlineView DM={DM} />
                : 
                DM.getSelections().topics > -1 &&
                    <TopicView DM={DM} />
                }
            </div>

            <ExportsDiv style={style.exportsDiv}>
                <Button 
                    mainStyle={style.exportBtn('#242424', '250px').default} 
                    hoverStyle={style.exportBtn('').hover}
                    label={"JSON"} 
                    onClick={() => exportAsJSON(DM.getDataAsJSON())}
                />  
                <Button 
                    mainStyle={style.exportBtn('#af0000', '250px').default} 
                    hoverStyle={style.exportBtn('').hover}
                    label={"PDF"} 
                    onClick={() => exportAsPDF(DM)}
                /> 
                <Button 
                    mainStyle={style.exportBtn('#000000').default} 
                    hoverStyle={style.exportBtn('').hover}
                    label={"Close"} 
                    onClick={() => setExportsAnim(SlideOutDown)}
                /> 
            </ExportsDiv>
        </div>
    );
}

export default CreateContent;