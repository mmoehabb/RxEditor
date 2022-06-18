import { useState } from "react";
import Button from "../../../MiniComponents/Button";
import TextInput from "../../../MiniComponents/TextInput";
import backBtnImg from '../media/backBtn.svg'
import getStyle from "../style/LoadFileSectionStyle";


interface Props {
  onUpload?: Function;
  onBack?: Function;
}

const LoadFileSection = (props: Props) => {
  const style = getStyle();

  const [fileURL, setFileURL] = useState("");
  const [jsonData, setJsonData] = useState("");

  const uploadFileHandler = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.click();

    input.addEventListener("change", () => {
        const reader = new FileReader();
        if(input.files) reader.readAsText(input.files[0]);
        reader.onload = () => setJsonData(String(reader.result));
    });
  }

  const editFileHandler = () => {
      sessionStorage.setItem("data", jsonData);
      
      const hrefElement = document.createElement('a');
      hrefElement.href = `/CreateContent/?fileURL=${fileURL}`;
      hrefElement.click();
  }

  const showFileHandler = () => {
      sessionStorage.setItem("data", jsonData);

      const hrefElement = document.createElement('a');
      hrefElement.href = `/ViewContent/?fileURL=${fileURL}`;
      hrefElement.click();
  }

  const onBack = () => {
    if (props.onBack) props.onBack();
  }

  return (
    <div style={style.root}>
        <div style={style.row('70%')}>
            <TextInput 
                style={style.textInput(false)}
                fStyle={style.textInput(true)}
                placeHolder="File URL"
                value={fileURL}
                onChange={(v) => setFileURL(v)}
            />
        </div>

        <div style={style.row('auto')}>
            <label style={{fontSize:'1.5em'}}>OR</label>
        </div>

        <div style={style.row('70%')}>
            <TextInput 
                style={style.textInput(false)}
                fStyle={style.textInput(true)}
                placeHolder="JSON Data"
                value={jsonData}
                onChange={(v) => setJsonData(v)}
            />
            <Button 
                style={{
                    backgroundColor: 'gray', 
                    fontFamily: 'Pangolin',
                    marginLeft: 20,
                }} 
                label={'Upload'} 
                onClick={uploadFileHandler}
            />
        </div>

        <div style={style.row('70%')}>
            <Button 
                style={{
                    margin: 'auto',
                    width: '35%',
                    fontFamily: 'Pangolin',
                }} 
                label={'Show It'} 
                onClick={showFileHandler}
            />
            <Button 
                style={{
                    backgroundColor: '#e1e1e1', 
                    color: '#3BAFB7',
                    margin: 'auto',
                    width: '35%',
                    fontFamily: 'Pangolin',
                }} 
                label={'Edit It'} 
                onClick={editFileHandler}
            />
        </div>

        <div style={style.row('100%', 'center')}>
            <Button 
            mainStyle={style.backBtn} 
            hoverStyle={{transform: 'rotate(-30deg) scale(1.15)'}}>
                <img 
                    alt=""
                    src={backBtnImg} 
                    onClick={onBack} 
                    style={{cursor: 'pointer', height: '7vh'}}
                />
            </Button>
        </div>
    </div>
  );
}

export default LoadFileSection;