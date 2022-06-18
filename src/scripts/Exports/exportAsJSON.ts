import DataManager from "../../DataManager/Classes/Model";

const exportAsJSON = (dataManager: DataManager) => {
  const data = JSON.stringify(dataManager.getDataAsJSON());
  const type = "application/json";
  const blob = new Blob([data], {type});

  console.log(URL.createObjectURL(blob))

  // Use <a></a> Element to download the data file
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "RxEditorDataFile.json";
  a.click();
}

export default exportAsJSON;