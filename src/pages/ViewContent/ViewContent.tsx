import { useState } from "react";
import useDataManager from "../../scripts/useDataManager";
import loadFromHeader from "../../scripts/loadFromHeader";

import getStyle from "./style/MainStyle";
import mediaQuery from "../../scripts/mediaQuery";

import TextEditor from "../../features/TextEditor/TextEditor";
import Navigation from "./components/Navigation";


const ViewContent = () => {
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

            <div style={style.contentDiv.root} onClick={() => hideNav()}>
                {
                DM.getSelections().sections > -1 ?
                <div style={style.contentDiv.viewer}>
                    <TextEditor 
                        height={'auto'} 
                        width={'auto'} 
                        content={DM.getSelectedSection()?.content}
                        viewMode={true}
                    />
                </div>
                : <label>Select a section.</label>
                }
            </div>
        </div>
    );
}

export default ViewContent;