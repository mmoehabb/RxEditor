import Button from "../../../MiniComponents/Button";
import DataManagerModel from "../../../DataManager/StrategyModel/Model";
import getStyle from "../style/ViewStyle";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";


interface Props {
  DM: DataManagerModel;
}

const HeadlineView = ({DM}: Props) => {
  const style = getStyle();

  return (
    DM.getSelectedHeadline() ?
    <div style={style.topDiv}>
      <div style={style.labelDiv}>
        <input 
          style={style.labelInput} 
          value={DM.getSelectedHeadline()?.label}
          onChange={({target}) => DM.modifySelectedHeadline(target.value)}
        />
        
        <Button 
          mainStyle={style.removeBtn()}
          hoverStyle={style.removeBtn('hover')}
          label={"X"}
          onClick={() => DM.removeSelectedHeadline()}
        />
      </div>

      <div style={style.sortBtnsDiv}>
          <div style={style.sortBtn}
          onClick={() => DM.moveSelectedHeadlineUp()}>
            <MdKeyboardArrowUp size="20px" color="#888" />
          </div>

          <div style={style.sortBtn} 
          onClick={() => DM.moveSelectedHeadlineDown()}>
            <MdKeyboardArrowDown size="20px" color="#888" />
          </div>
        </div>
    </div>
    :
    <div>
      No headline is selected
    </div>
  );
}

export default HeadlineView;