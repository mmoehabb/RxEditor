import Button from "../../../MiniComponents/Button";
import TextEditor from "../../../features/TextEditor/TextEditor";
import DataManagerModel from "../../../DataManager/Classes/Model";
import getStyle from "../style/ViewStyle";


interface Props {
  DM: DataManagerModel;
}

const TopicView = ({DM}: Props) => {
  const style = getStyle();
  
  return (
    <div style={style.secDiv}>
      <div style={style.labelDiv}>
        <input 
          style={style.labelInput} 
          value={DM.getSelectedSection()?.label} 
          onChange={({target}) => DM.modifySelectedSection(target.value)}
        />
        <Button 
          mainStyle={style.removeBtn()}
          hoverStyle={style.removeBtn('hover')}
          label={"X"}
          onClick={() => DM.removeSelectedSection()}
        />
      </div>
      <div style={style.editorContainer}>
        <TextEditor 
          content={DM.getSelectedSection()?.content}
          updateContent={(c) => DM.modifySelectedSectionContent(c)}
        />
      </div>
    </div>
  );
}

export default TopicView;