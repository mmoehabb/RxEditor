import { ReactElement } from "react";

import CategoryGroup from "./components/CategoryGroup";
import DataManagerModel from "../../DataManager/Classes/Model";
import NavBtnImg from "../../media/navBtn.svg";
import getStyle from "./style/MainStyle";


interface Props {
  DM: DataManagerModel;
  onShow?: Function;
  hidden?: boolean;
  children?: ReactElement<any>;
  viewMode?: boolean;
}

const Navigation = (props: Props) => {
  const style = getStyle();

  const showBtnHandler = () => {
    if (props.onShow) props.onShow();
  }

  return (
    <>
    {
      props.hidden ?
      <img 
          style={style.showBtn} 
          src={NavBtnImg} 
          alt=""
          onClick={showBtnHandler}
      />
      :
      <div style={style.root}>
          {["topics", "headlines", "sections"].map((cat) => 
            <CategoryGroup 
              category={cat as "topics" | "headlines" | "sections"} 
              dataManager={props.DM} 
              viewMode={props.viewMode}
            />
          )}

          <div style={style.children}>
            {props.children}
          </div>
      </div>
    }
    </>
  );
}

export default Navigation;