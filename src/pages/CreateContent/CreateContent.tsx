import { useState } from "react";
import useDataManager from "../../scripts/useDataManager";
import loadFromHeader from "../../scripts/loadFromHeader";

import getStyle from "./style/MainStyle";
import mediaQuery from "../../scripts/mediaQuery";

import Navigation from "./components/Navigation";
import SectionView from "./components/SectionView";
import HeadlineView from "./components/HeadlineView";
import TopicView from "./components/TopicView";


const CreateContent = () => {
    const style = getStyle();
    
    const DM = useDataManager();

    const [navVisibility, setNavVisibility] = useState(true);
    const [firstRender, setFirstRender] = useState(true);

    const showNav = () => {
        setNavVisibility(true);
    }
    const hideNav = () => {
        if (mediaQuery('(max-width: 768px)'))
            setNavVisibility(false);
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
                hidden={!navVisibility} 
            /> 

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
        </div>
    );
}

export default CreateContent;