import exportAsJSON from "../../../scripts/Exports/exportAsJSON";

import getStyle from "../style/NavigationStyle";
import NavBtnImg from "../../../media/navBtn.svg";

import Button from "../../../MiniComponents/Button";
import CategoryGroup from "../../../MiniComponents/CategoryGroup";
import DataManagerModel from "../../../DataManager/Classes/Model";


interface Props {
  DM: DataManagerModel;
  onShow?: Function;
  hidden?: boolean;
}

const Navigation = (props: Props) => {
  const style = getStyle();

  const showBtnHandler = () => {
    if (props.onShow) props.onShow();
  }

  const exportData = () => {
    exportAsJSON(props.DM);
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
          <CategoryGroup category={"topics"} dataManager={props.DM} />
          <CategoryGroup category={"headlines"} dataManager={props.DM} />
          <CategoryGroup category={"sections"} dataManager={props.DM} />

          <Button 
              style={{backgroundColor: '#27ae60'}} 
              label={"Export"} 
              onClick={() => exportData()}
          />        
      </div>
    }
    </>
  );
}

export default Navigation;