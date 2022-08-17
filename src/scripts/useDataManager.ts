import { useContext, useState } from "react";
import DataManager from "../DataManager/StrategyModel/Model";
import { DataManagerContext } from "../DataManager/Context";

const useDataManager = () => {
  const DMC = useContext(DataManagerContext)
  const [DM, setDM] = useState(new DataManager(
      () => setDM((prev) => prev.clone()), // to update the UI
      DMC.getData()
  ));

  return DM;
}

export default useDataManager;