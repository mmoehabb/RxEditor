import Button from "../../../MiniComponents/Button";
import DataManagerModel from "../../../DataManager/StrategyModel/Model";
import getStyle from "../style/ViewStyle";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  DM: DataManagerModel;
}

const TopicView = ({DM}: Props) => {
  const style = getStyle();

  return (
    <div style={style.labelDiv}>
      <div style={style.sortBtnsDiv}>
        <div style={style.sortBtn}
        onClick={() => DM.moveSelectedTopicUp()}>
          <MdKeyboardArrowUp size="20px" color="#888" />
        </div>

        <div style={style.sortBtn} 
        onClick={() => DM.moveSelectedTopicDown()}>
          <MdKeyboardArrowDown size="20px" color="#888" />
        </div>
      </div>
      
      <input 
        style={style.labelInput} 
        value={DM.getSelectedTopic()?.label}
        onChange={({target}) => DM.modifySelectedTopic(target.value)}
      />

      <Button 
        mainStyle={style.removeBtn()}
        hoverStyle={style.removeBtn('hover')}
        label={"X"}
        onClick={() => DM.removeSelectedTopic()}
      />
    </div>
  );
}

export default TopicView;