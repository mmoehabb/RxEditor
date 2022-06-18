import { createContext } from "react";
import DataManagerModel from "./Classes/Model";

const DM = new DataManagerModel();
const dataStream = sessionStorage.getItem("data");

try {
  if (typeof dataStream === "string") {
      const jsonData = JSON.parse(dataStream);
      if (jsonData.topics) DM.loadDataFromJSON(jsonData);
  }
}
catch (e: any) {
  console.log(e);
}

export const DataManagerContext = createContext(DM);

const DataContext = (props: any) => {
  return (
    <DataManagerContext.Provider value={DM}>
      {props.children}
    </DataManagerContext.Provider>
  );
}
export default DataContext;