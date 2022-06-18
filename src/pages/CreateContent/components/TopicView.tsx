import Button from "../../../MiniComponents/Button";
import DataManagerModel from "../../../DataManager/Classes/Model";
import getStyle from "../style/ViewStyle";


interface Props {
  DM: DataManagerModel;
}

const TopicView = ({DM}: Props) => {
  const style = getStyle();

  return (
    <div style={style.labelDiv}>
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