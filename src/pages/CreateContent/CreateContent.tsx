import { useState } from "react";
import useDataManager from "../../scripts/useDataManager";
import loadFromHeader from "../../scripts/loadFromHeader";

import getStyle from "./style/MainStyle";
import mediaQuery from "../../scripts/mediaQuery";

import Navigation from "../../features/Navigation/Navigation";
import SectionView from "./components/SectionView";
import HeadlineView from "./components/HeadlineView";
import TopicView from "./components/TopicView";
import Button from "../../MiniComponents/Button";
import exportAsJSON from "../../scripts/Exports/exportAsJSON";


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

    const exportData = () => {
        exportAsJSON(DM);
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
                    mainStyle={style.exportBtn.default} 
                    hoverStyle={style.exportBtn.hover}
                    label={"Export"} 
                    onClick={() => exportData()}
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
        </div>
    );
}

export default CreateContent;