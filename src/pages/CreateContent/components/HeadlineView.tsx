import Button from "../../../MiniComponents/Button";
import DataManagerModel from "../../../DataManager/Classes/Model";
import getStyle from "../style/ViewStyle";


interface Props {
  DM: DataManagerModel;
}

const HeadlineView = ({DM}: Props) => {
  const style = getStyle();

  return (
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
  );
}

export default HeadlineView;