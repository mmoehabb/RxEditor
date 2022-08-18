import { ReactElement } from "react";

import CategoryGroup from "./components/CategoryGroup";
import DataManagerModel from "../../DataManager/StrategyModel/Model";
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
      <div 
          style={style.showBtn} 
          onClick={showBtnHandler}
      ></div>
      :
      <div style={style.root}>
          {["topics", "headlines", "sections"].map((cat,i) => 
            <CategoryGroup 
              key={i}
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