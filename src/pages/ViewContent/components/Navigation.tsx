import Button from "../../../MiniComponents/Button";
import CategoryGroup from "../../../MiniComponents/CategoryGroup";
import DataManagerModel from "../../../DataManager/Classes/Model";

import NavBtnImg from "../../../media/navBtn.svg";
import getStyle from "../style/NavigationStyle";
import { showError } from "../../../features/Alert/Alert";


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
          <CategoryGroup category={"topics"} dataManager={props.DM} viewModel={true} />
          <CategoryGroup category={"headlines"} dataManager={props.DM} viewModel={true} />
          <CategoryGroup category={"sections"} dataManager={props.DM} viewModel={true} />

          <Button 
              style={{backgroundColor: '#ff7675'}} 
              label={"Export as PDF"} 
              onClick={() => showError("Not Available Yet")}
          />
      </div>
    }
    </>
  );
}

export default Navigation;