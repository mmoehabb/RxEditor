import Button from "../../../MiniComponents/Button";
import TextEditor from "../../../features/TextEditor/TextEditor";
import DataManagerModel from "../../../DataManager/Classes/Model";
import getStyle from "../style/ViewStyle";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  DM: DataManagerModel;
}

const SectionView = ({DM}: Props) => {
  const style = getStyle();
  
  return (
    <div style={style.secDiv}>
      
      <div style={style.labelDiv}>

        <div style={style.sortBtnsDiv}>
          <div style={style.sortBtn}
          onClick={() => DM.moveSelectedSectionUp()}>
            <MdKeyboardArrowUp size="20px" color="#888" />
          </div>

          <div style={style.sortBtn} 
          onClick={() => DM.moveSelectedSectionDown()}>
            <MdKeyboardArrowDown size="20px" color="#888" />
          </div>
        </div>

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

export default SectionView;